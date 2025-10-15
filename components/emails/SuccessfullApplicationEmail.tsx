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
  Link,
} from "@react-email/components";
import { KeyTextField } from "@prismicio/client";

type SuccessfulApplicationEmailProps = {
  name: string;
  phonenumber: string;
  position: string | KeyTextField;
};

const SuccessfulApplicationEmail = ({
  name,
  phonenumber,
  position,
}: SuccessfulApplicationEmailProps) => {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f5f5f5",
          color: "#374151",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "40px auto",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Section style={{ padding: "32px" }}>
            <Heading
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#1d4ed8",
                marginBottom: "16px",
              }}
            >
              Thank You for Applying!
            </Heading>
            <Text
              style={{
                fontSize: "18px",
                color: "#6b7280",
                marginBottom: "16px",
              }}
            >
              Dear {name},
            </Text>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              We&apos;re excited to inform you that we have received your
              application for the <strong>{position}</strong> position. Our team
              is carefully reviewing your qualifications, and we&apos;re
              thrilled to consider you for a role
            </Text>
            <Hr
              style={{
                margin: "24px 0",
                borderColor: "#d1d5db",
                borderWidth: "1px",
              }}
            />
            <Heading
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "16px",
              }}
            >
              Application Summary
            </Heading>
            <Text style={{ marginBottom: "8px", fontSize: "16px" }}>
              <strong>Position:</strong> {position}
            </Text>
            <Text style={{ marginBottom: "8px", fontSize: "16px" }}>
              <strong>Candidate:</strong> {name}
            </Text>
            <Text style={{ marginBottom: "32px", fontSize: "16px" }}>
              <strong>Contact:</strong> {phonenumber}
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#6b7280",
                marginBottom: "24px",
              }}
            >
              We&apos;ll be in touch with you soon regarding the next steps. If
              you have any questions or need further assistance, please feel
              free to reach out to us at{" "}
              <Link
                href="mailto:info@darkalphacapital.com"
                style={{ color: "#2563eb", textDecoration: "underline" }}
              >
                info@darkalphacapital.com
              </Link>{" "}
              or{" "}
              <Link
                href="mailto:careers@darkalphacapital.com"
                style={{ color: "#2563eb", textDecoration: "underline" }}
              >
                careers@darkalphacapital.com
              </Link>
              .
            </Text>

            <Text
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1d4ed8",
                marginTop: "24px",
              }}
            >
              Best Regards,
              <br />
              The Hiring Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SuccessfulApplicationEmail;
