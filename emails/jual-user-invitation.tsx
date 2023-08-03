import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";

const IconURL = "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/praktis-logo_hmedQfe.png";
const doodleUrl = "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/email-doodle-header.png";

const instagram_icon = "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/instagram.png";
const linkedin_icon = "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/linkedin_gveKYuz.png";
export const JualInviteUser = ({ name = "User Name", targetRole = "Admin", company_name = "Company Name" }: { name?: string; targetRole?: string; company_name?: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Jual Praktis Invitation</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans text-[#4F4E4E]  text-base">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[600px]">
            <Section className="mt-[32px]">
              <Img src={`${IconURL}`} width="175" height="75" alt="praktis-logo" className="my-0 mx-auto" />
            </Section>
            <Section className="my-4">
              <Img src={`${doodleUrl}`} width="200" height="300" alt="doodle-image" className="my-0 mx-auto -rotate-12" />
            </Section>
            <Heading className="text-[24px] text-[#3D8DA6] font-normal text-center p-0 my-[30px] mx-0">
              <strong className="text-4xl">You have been invited to Jual Praktis</strong>
            </Heading>
            <Text className="text-[#4F4E4E] text-[14px] leading-[24px] text-base">Hi {name},</Text>
            <Text className="text-[#4F4E4E] text-[14px] leading-[24px] text-base">
              You have been invited to access Jual-Praktis as <strong>{targetRole}</strong> at <strong>{company_name}</strong>
            </Text>
            <Button
              className="bg-[#F2963D] mt-[32px] mb-[32px]  w-full rounded-lg py-2 text-center text-base text-white font-bold no-underline "
              href="https://jual.praktis.co/new-account?token=KWZWAY87AA"
            >
              Setup Account
            </Button>
            <Text className="text-[#4F4E4E] text-[14px] leading-[24px]  text-base">
              or You can copy the link:
              <br />
              <Link href={"https://jual.praktis.co/new-account?token=KWZWAY87AA"} className="text-blue-600 no-underline  text-base">
                https://jual.praktis.co/new-account?token=KWZWAY87AA'
              </Link>
            </Text>

            <Text className="text-base text-[#4F4E4E]">
              Thank You, <br /> The Praktis team
            </Text>
            <Text className="text-base text-[#4F4E4E]">*if you didn’t attempt to create a new account in Jual-Praktis, you can safely disregard this email.</Text>
            <Hr className="border border-solid border-[#eaeaea] my-16 mx-0 w-full" />
            <Text className="text-center text-sm text-[#4F4E4E]">
              Need help? Feel free to contact Us as{" "}
              <Link className="text-[#3D8DA6] underline" href="mailto:layanan@praktis.co">
                layanan@praktis.co
              </Link>
            </Text>
            <Row>
              <Column className="w-10"></Column>
              <Column className="w-10"></Column>
              <Column className="w-10" align="center">
                <Row className="text-center">
                  <Column align="right">
                    <Link href="https://instagram.com/pts.sc">
                      <Img src={instagram_icon} alt="instagram-icon" className="mx-auto" />
                    </Link>
                  </Column>
                  <Column align="left">
                    <Link href="https://www.linkedin.com/company/prakasa-triputra-solusi/">
                      <Img src={linkedin_icon} alt="linkedin-icon" className="mx-auto" />
                    </Link>
                  </Column>
                </Row>
              </Column>
              <Column className="w-10"></Column>
              <Column className="w-10"></Column>
            </Row>
            <Text className="text-center text-sm text-[#4F4E4E]">Jl. Mataram Raya No.6 RT 002/ RW 001, Kel. Selong, Kec. Kby. Baru, DKI Jakarta 12110</Text>
            <Section>
              <Img src={`${IconURL}`} width="125" height="50" alt="praktis-logo" className="my-0 mx-auto" />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default JualInviteUser;
