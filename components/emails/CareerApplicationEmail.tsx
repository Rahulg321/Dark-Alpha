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

type CareerApplicationEmailProps = {
  name: string;
  phonenumber: string;
  position: string;
};

const CareerApplicationEmail = ({
  name,
  phonenumber,
  position,
}: CareerApplicationEmailProps) => {
  return (
    <Html>
      <Head />
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
              Job Posting for {position}
            </Heading>
            <Hr style={{ margin: "20px 0", borderColor: "#e0e0e0" }} />
            <Heading
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#333333",
              }}
            >
              Applicants Name is {name}
            </Heading>
            <Hr style={{ margin: "20px 0", borderColor: "#e0e0e0" }} />
            <Text style={{ marginBottom: "10px", fontSize: "16px" }}>
              The applicants phone number === {phonenumber}
            </Text>
            <Text style={{ fontSize: "16px" }}>
              The applicants resume is attached below for reference
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CareerApplicationEmail;
