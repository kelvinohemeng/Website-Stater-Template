import React, { useState } from "react";
import Stack from "../../components/Stack";
import Typography from "../../components/Typography";
import { Button } from "../../components/Buttons/Button";

const services = [
  "Branding",
  "Digital Marketing",
  "Digital & Offset Printing",
  "Outdoor Advertising",
];

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: any) => {
    e.preventDefault(); // prevent form reload
    setStatus("Sending...");

    const res = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        service: selectedService,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setSelectedService("");
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div>
      <Stack orientation="horizontal" container="default" padding="default">
        <div className="flex flex-col w-full gap-4">
          <Typography variant="h2">Get in touch</Typography>
          <Typography
            variant="body1"
            className="max-w-xl text-e-4xl opacity-70"
          >
            Let's collaborate. Tell us what you're looking for and we'll make it
            happen.
          </Typography>
        </div>
        <div className="w-full">
          <form className="flex flex-col gap-6 text-e-2xl" onSubmit={sendEmail}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="pb-4 border-b border-black/30 focus:outline-none"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="pb-4 border-b border-black/30 focus:outline-none"
              required
            />
            <div className="flex flex-col gap-4">
              <span>What Service Are you Looking For?</span>
              <div className="flex gap-2 flex-wrap">
                {services.map((serv, sIndex) => (
                  <div
                    className={`p-4 py-3 border rounded-full text-nowrap ${
                      selectedService === serv
                        ? "bg-black text-white"
                        : "bg-black/10"
                    } cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 ease-in-out`}
                    onClick={() => setSelectedService(serv)}
                    key={sIndex}
                  >
                    {serv}
                  </div>
                ))}
              </div>
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="pb-4 border-b border-black/30 focus:outline-none"
              required
            ></textarea>
            <button type="submit">
              <Button color="black" variant="primary">
                Send Message
              </Button>
            </button>
            <p>{status}</p>
          </form>
        </div>
      </Stack>
    </div>
  );
}
