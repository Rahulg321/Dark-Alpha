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
  name: string;
  phonenumber: string;
};

const CareerApplicationEmail = ({
  name,
  phonenumber,
}: CareerApplicationEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-static text-text">
          <Container>
            <Section className="my-10 rounded-md border px-10 py-4">
              <Heading className="leading-tight">
                Applicants Name is {name}
              </Heading>
              <Hr />
              <Text>The applicants phone number === {phonenumber}</Text>
              <Text>The applicants resume is attached below for reference</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CareerApplicationEmail;
