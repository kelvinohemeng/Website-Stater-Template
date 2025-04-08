const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message, service } = JSON.parse(event.body);

  const emailHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ContactEmail, {
      name,
      email,
      message,
      service,
    })
  );

  try {
    const data = await resend.emails.send({
      from: "Eleventhspace <eleventhspace.com>", // This must match a verified domain in Resend
      to: "kelvinohemeng59@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
