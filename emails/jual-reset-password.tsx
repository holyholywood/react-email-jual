import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const jualPraktisIconURL = "https://s3.ap-southeast-1.amazonaws.com/staging.portalv2.images/jual_praktis_icon_email.png";
const praktisIcon = "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/praktis-logo_hmedQfe.png";
const doodleUrl = "https://s3.ap-southeast-1.amazonaws.com/staging.portalv2.images/doodle_reset_password_email.png";

const instagram_icon = "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/instagram.png";
const youtube_icon = "https://s3.ap-southeast-1.amazonaws.com/staging.portalv2.images/youtube_logo_email.png";
const linkedin_icon = "https://s3.ap-southeast-3.amazonaws.com/omspts.dev.public/linkedin_gveKYuz.png";
export const JualInviteUser = ({ name = "Danielle Haerin" }: { name?: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Reset your Password</Preview>
      <Tailwind>
        <Body className="bg-[#EDEFF1] py-4 my-auto mx-auto font-sans text-[#3d3d3d] text-[14px]">
          <Section className="">
            <Img src={`${jualPraktisIconURL}`} width="150" alt="jual-praktis-logo" className="mt-8 mx-auto" />
          </Section>
          <Container className="bg-white rounded-[32px] my-8 mx-auto py-[63px] px-[69px] w-[621px] gap-4">
            <Row>
              <Column className="w-10" align="center">
                <Row className="text-center">
                  <Column align="right">
                    <Section>
                      <Img src={`${doodleUrl}`} width="61" height="65" alt="doodle-image" className="my-0 mx-auto" />
                    </Section>
                  </Column>
                  <Column align="center">
                    <Text className="ml-4 text-[#3d3d3d] text-left text-[16px] font-medium">
                      Hey {name}, <br />
                      forgot your password?
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="w-10"></Column>
              <Column className="w-10"></Column>
            </Row>

            <Text className="text-[14px] text-[#3d3d3d] leading-[19.6px]">
              A request to reset your account password has been made.{" "}
              <b className="font-semibold">If you did not make this request, simply ignore this email.</b> If you did make this request, please
              reset your password:
            </Text>

            <Section className="text-center">
              <Button
                className="bg-[#F78D2A] mx-auto rounded-full py-2 px-4 text-center text-[14px] text-white font-normal no-underline"
                href="https://jual.praktis.co/reset-password?token=KWZWAY87AA"
              >
                Reset Password
              </Button>
            </Section>

            <Text className="text-[14px] text-[#4F4E4E] leading-[19.6px]">
              Thank You, <br /> Jual.Praktis team
            </Text>

            <Text className="text-[12px] text-[#B0B0B0] leading-[16.8px]">
              If the button above does not work, try copying and pasting the URL into your browser. <br />
              <Link href={"https://jual.praktis.co/reset-password?token=KWZWAY87AA"} className="text-[#277CE9] no-underline">
                https://jual.praktis.co/reset-password?token=KWZWAY87AA
              </Link>
              <br />
              If you continue to have problems, please tell us at{" "}
              <Link className="no-underline text-[#B0B0B0]" href="mailto:layanan@praktis.co">
                layanan@praktis.co
              </Link>
            </Text>
          </Container>
          <Section className="text-center mb-8 mx-auto px-[77px] w-[621px]">
            <Img src={`${praktisIcon}`} width="73" alt="praktis-logo" className="mt-0 mb-1 mx-auto" />
            <Text className="text-center text-[12px] font-semibold text-[#6D6D6D] my-0 leading-[16.8px]">PT. Prakasa Niaga Solusi</Text>
            <Text className="text-center text-[10px] text-[#6D6D6D] mt-0 leading-[12.1px]">
              Jl. Mataram Raya No.6RT 002/ RW 001, Kel. Selong, <br /> Kec. Kby. Baru, DKI Jakarta 12110
            </Text>
            <Row>
              <Column className="w-10"></Column>
              <Column className="w-10"></Column>
              <Column className="w-10" align="center">
                <Row className="text-center">
                  <Column align="right">
                    <Link href="https://instagram.com/pts.sc">
                      <Img src={instagram_icon} width="20" alt="instagram-icon" className="mx-auto" />
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link href="https://www.youtube.com/@praktis9502">
                      <Img src={youtube_icon} width="18" alt="youtube-icon" className="mx-auto" />
                    </Link>
                  </Column>
                  <Column align="left">
                    <Link href="https://www.linkedin.com/company/prakasa-triputra-solusi/">
                      <Img src={linkedin_icon} width="20" alt="linkedin-icon" className="mx-auto" />
                    </Link>
                  </Column>
                </Row>
              </Column>
              <Column className="w-10"></Column>
              <Column className="w-10"></Column>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default JualInviteUser;
