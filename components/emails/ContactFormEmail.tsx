import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  email: string;
  name: string;
  message: string;
  phoneNumber: string;
};

const ContactFormEmail = ({
  message,
  email,
  name,
  phoneNumber,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from Dark Alpha Website</Preview>
      <Body
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
        >
          <Section
            style={{
              margin: "40px 0",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              padding: "20px 40px",
            }}
          >
            <Heading
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#333333",
              }}
            >
              Received the following message from {name}
            </Heading>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#000000",
                marginBottom: "20px",
              }}
            >
              {message}
            </Text>
            <Hr style={{ margin: "20px 0", borderColor: "#e0e0e0" }} />
            <Text style={{ marginBottom: "10px", fontSize: "16px" }}>
              This senders email is {email}
            </Text>
            <Text style={{ fontSize: "16px" }}>
              This senders phone number is {phoneNumber}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;
