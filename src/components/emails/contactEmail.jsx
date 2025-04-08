import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
} from "@react-email/components";

const ContactEmail = ({ name, email, message, service }) => (
  <Html>
    <Head />
    <Preview>New message from your contact form "eleventhspace.com"</Preview>
    <Body style={{ backgroundColor: "#f3f3f3", fontFamily: "Arial" }}>
      <Container style={{ padding: "20px", backgroundColor: "#fff" }}>
        <Text>
          <strong>Name:</strong> {name}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Service:</strong> {service}
        </Text>
        <Text>
          <strong>Message:</strong>
          <br />
          {message}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;
