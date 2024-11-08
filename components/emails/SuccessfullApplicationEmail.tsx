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
import { Tailwind } from "@react-email/tailwind";
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
      <Tailwind>
        <Body className="bg-gray-50 font-sans text-gray-700">
          <Container className="mx-auto my-10 max-w-lg overflow-hidden rounded-lg bg-white shadow-md">
            <Section className="p-8">
              <Heading className="text-2xl font-bold text-blue-700">
                Thank You for Applying!
              </Heading>
              <Text className="mt-2 text-lg text-gray-600">Dear {name},</Text>
              <Text className="mt-4">
                We’re excited to inform you that we have received your
                application for the <strong>{position}</strong> position. Our
                team is carefully reviewing your qualifications, and we’re
                thrilled to consider you for a role at our company.
              </Text>
              <Hr className="my-6 border-gray-300" />
              <Heading className="text-lg font-semibold text-gray-700">
                Application Summary
              </Heading>
              <Text className="mt-2">
                <strong>Position:</strong> {position}
              </Text>
              <Text>
                <strong>Candidate:</strong> {name}
              </Text>
              <Text>
                <strong>Contact:</strong> {phonenumber}
              </Text>

              <Text className="mt-8 text-gray-600">
                We’ll be in touch with you soon regarding the next steps. If you
                have any questions or need further assistance, please feel free
                to reach out to us at{" "}
                <a
                  href="mailto:info@darkalphacapital.com"
                  className="text-blue-600 underline"
                >
                  info@darkalphacapital.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:careers@darkalphacapital.com"
                  className="text-blue-600 underline"
                >
                  careers@darkalphacapital.com
                </a>
                .
              </Text>

              <Text className="mt-6 font-semibold text-blue-700">
                Best Regards,
                <br />
                The Hiring Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SuccessfulApplicationEmail;
