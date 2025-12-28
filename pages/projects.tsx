import { NextPage } from "next"
import Head from "next/head";
import { Navbar } from "../components/ui/Navigation";
import { Container } from "../components/ui/Container";
import { H1, H2, Text } from "../components/ui/Typography";
import { Grid, Section, Flex } from "../components/ui/Layout";
import { ImageWrapper } from "../components/ui/Media";
import { css } from "@emotion/css";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Lambdasafe</title>
        <meta name="description" content="Explore our projects in AI, Audio Processing, and Training Software." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container className={css`padding-top: 2rem; padding-bottom: 4rem;`}>

        {/* Agentic Systems */}
        <Section>
          <Grid cols={2} gap="3rem">
            <ImageWrapper src="/agentic.jpg" alt="Agentic Systems" aspectRatio="16/9" />
            <Flex direction="column" align="flex-start" justify="center">
              <H1>Agentic Systems</H1>
              <Text>
                We are working on fully autonomous AI agentic systems, taking advantage of RAG, short and long term memory, function calling and models which can be self deployed or ran locally through ollama.
              </Text>
            </Flex>
          </Grid>
        </Section>

        {/* Voltage Modular */}
        <Section>
          <Grid cols={2} gap="3rem">
            <Flex direction="column" align="flex-start" justify="center">
              <H2>Voltage Modular</H2>
              <Text>
                We have developed advanced modules for a leading modular synthesis platform, utilizing cutting-edge programming languages to enhance audio processing capabilities. Our innovations include solutions for real-time audio effects and performance-enhancing technologies. <strong>Demo on request.</strong>
              </Text>
              <Text>
                Fully released modules can be found <a href="https://store.cherryaudio.com/manufacturers/lambdasafe" target="_blank" rel="noopener noreferrer" className={css`color: #6366f1; text-decoration: none; &:hover { text-decoration: underline; }`}>here</a>.
              </Text>
            </Flex>
            <ImageWrapper
              src="/vm-reverb-ss.png"
              alt="Voltage Modular"
              aspectRatio="1/1"
              wrapperClassName={css`
                        border-radius: 50% !important; 
                        width: 300px; 
                        margin-left: auto;
                    `}
            />
          </Grid>
        </Section>

        {/* Training Software */}
        <Section>
          <Grid cols={2} gap="3rem">
            <ImageWrapper src="/line-drag-demo.gif" alt="Training Software" aspectRatio="16/9" />
            <Flex direction="column" align="flex-start" justify="center">
              <H1>Training Software</H1>
              <Text>
                We have created a fully featured Vue abstraction for a 3D visualization library used in medical and security imaging. This solution enhances training applications by simulating different imaging scenarios, with features for scene manipulation and real-time parameter adjustments.  <strong>Demo available on request.</strong>
              </Text>
            </Flex>
          </Grid>
        </Section>

        {/* BIGKit */}
        <Section>
          <Grid cols={2} gap="3rem">
            <Flex direction="column" align="flex-start" justify="center">
              <H2>BIGKit</H2>
              <Text>
                BIGKit attempts to bridge the gap between a publish-focused CMS and real application development. It was built from the ground up to include some core tenets an opinionated software engineer might expect from a system builder.
              </Text>
              <Text>
                You can read the full articles below:
              </Text>
              <ul className={css`
                        list-style-type: disc;
                        padding-left: 1.5rem;
                        font-family: 'Inter', sans-serif;
                        color: #334155;
                        line-height: 1.6;
                        li { margin-bottom: 0.5rem; }
                        a { color: #6366f1; text-decoration: none; &:hover { text-decoration: underline; } }
                     `}>
                <li><a href="https://blog.devgenius.io/introducing-bigkit-95dc874ee689" target="_blank" rel="noreferrer">Introducing BIGKit</a></li>
                <li><a href="https://medium.com/dev-genius/introducing-bigkit-part-2-8136678c55a9" target="_blank" rel="noreferrer">Introducing BIGKit part 2</a></li>
                <li><a href="https://medium.com/swlh/exploring-graphql-with-bigkit-d6c6236b3a5d" target="_blank" rel="noreferrer">Exploring GraphQL integration With BIGKit</a></li>
              </ul>
            </Flex>
            <ImageWrapper src="/bigkit-hello-world.gif" alt="BIGKit Mission" aspectRatio="4/3" />
          </Grid>
        </Section>

      </Container>
    </>
  );
}

export default ProjectsPage;