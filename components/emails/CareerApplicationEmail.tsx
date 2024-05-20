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

type CareerApplicationEmailProps = {
  email: string;
  name: string;
  phoneNumber: string;
  postName: string | KeyTextField;
};

const CareerApplicationEmail = ({
  email,
  name,
  phoneNumber,
  postName,
}: CareerApplicationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Application for Job Posting of {postName as string}</Preview>
      <Tailwind>
        <Body className="bg-static text-text">
          <Container>
            <Section className="my-10 rounded-md border px-10 py-4">
              <Heading className="leading-tight">
                Received the following message from {name}
              </Heading>
              <Hr />
              <Heading className="leading-loose">
                The applicants wants to apply for {postName}
              </Heading>
              <Text>The applicants email is {email}</Text>
              <Text>This applicants phone number is {phoneNumber}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CareerApplicationEmail;
