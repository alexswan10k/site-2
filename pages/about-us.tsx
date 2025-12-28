import { NextPage } from "next"
import Head from "next/head";
import { Navbar } from "../components/ui/Navigation";
import { Container } from "../components/ui/Container";
import { H1, H2, H3, Text } from "../components/ui/Typography";
import { Grid, Section, Flex } from "../components/ui/Layout";
import { ImageWrapper } from "../components/ui/Media";
import { css } from "@emotion/css";

const AboutUsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Lambdasafe</title>
        <meta name="description" content="About Lambdasafe - Our Mission, Process, and Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container className={css`padding-top: 2rem; padding-bottom: 4rem;`}>
        {/* About Our Company */}
        <Section>
          <Grid cols={2} gap="3rem">
            <ImageWrapper src="/dude-at-computer.jpg" alt="Hero Image" aspectRatio="4/3" />
            <Flex direction="column" align="flex-start" justify="center">
              <H1>About Our Company</H1>
              <Text>
                Lambdasafe, founded by Alex Swan, a seasoned full stack software engineer, who brings over a decade of experience in building scalable and reliable systems. Previously having worked at companies such as Rolls Royce and Hargreaves Lansdown, Alex developed the core technology for BIGKit, a rapid application platform. Our approach is to use tools that enhance determinism, predictability, and reliability, leading to software with significantly lower defect rates and higher stability.
              </Text>
            </Flex>
          </Grid>
        </Section>

        {/* Our Mission */}
        <Section>
          <Grid cols={2} gap="3rem">
            <Flex direction="column" align="flex-start" justify="center">
              <H2>Our Mission</H2>
              <Text>
                At Lambdasafe, we aim to deliver efficient, reliable software by leveraging the principles of simplicity and predictability. We focus on using the S.A.F.E. functional stack to reduce complexity and maintenance costs, ensuring our clients benefit from stable, high-quality software solutions.
              </Text>
            </Flex>
            <ImageWrapper src="/ornament.jpg" alt="Mission" aspectRatio="16/9" />
          </Grid>
        </Section>

        {/* Our Process */}
        <Section>
          <Grid cols={2} gap="3rem">
            <ImageWrapper src="/glass-building.jpg" alt="Hero Image" aspectRatio="4/3" />
            <Flex direction="column" align="flex-start" justify="center">
              <H1>Our Process</H1>
              <Text>
                Our development process starts with understanding your specific problem, guiding you towards an effective solution. We offer two main approaches:
              </Text>
              <Text>
                <strong>Agile Approach:</strong> Recommended for flexibility, allowing for quick iterations and user feedback to shape the development cycle.
              </Text>
              <Text>
                <strong>Up-Front Approach:</strong> For those with fixed budgets, we provide detailed estimates but note the inherent risks and premiums of this method. Both methods aim for continuous feedback and visible progress, ensuring you&#39;re investing in features that add the most value.
              </Text>
            </Flex>
          </Grid>
        </Section>

        {/* Our Team */}
        <Section>
          <div className={css`text-align: center; margin-bottom: 2rem;`}>
            <H2>Our Team</H2>
          </div>
          <Grid cols={1} gap="2rem">
            <div className={css`text-align: center;`}>
              <ImageWrapper
                src="/alex-profile-c.png"
                alt="Alex Swan"
                wrapperClassName={css`width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 1rem;`}
              />
              <H3>Alex Swan</H3>
              <Text>Director</Text>
            </div>
          </Grid>
        </Section>

        {/* Stats */}
        <Section>
          <div className={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    text-align: center;
                    padding: 3rem 0;
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    @media (max-width: 768px) {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                `}>
            <div>
              <H3>15+</H3>
              <Text style={{ marginBottom: 0 }}>Years Experience</Text>
            </div>
            <div>
              <H3>7+</H3>
              <Text style={{ marginBottom: 0 }}>Projects Completed</Text>
            </div>
            <div>
              <H3>100%</H3>
              <Text style={{ marginBottom: 0 }}>Client Satisfaction</Text>
            </div>
          </div>
        </Section>

      </Container>
    </>
  );
}

export default AboutUsPage;