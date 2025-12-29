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

        {/* Intro */}
        <Section className={css`text-align: center; margin-bottom: 4rem;`}>
           <H1>High-Stakes Implementations</H1>
           <Text className={css`max-width: 800px; margin: 0 auto;`}>
             From securing financial models to orchestrating autonomous agents, we build the infrastructure that makes AI reliable in the real world.
           </Text>
        </Section>

        {/* FinTech GenAI Guardrails (New) */}
        <Section>
          <Grid cols={2} gap="3rem">
             <div className={css`
                width: 100%;
                aspect-ratio: 16/9;
                background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-family: 'Exo 2', sans-serif;
                font-size: 1.5rem;
                font-weight: 700;
             `}>
                FinTech Guardrails
             </div>
            <Flex direction="column" align="flex-start" justify="center">
              <H2>FinTech GenAI Guardrails</H2>
              <Text>
                We engineered a deterministic validation layer for a major financial institution&apos;s internal LLM chatbot. By implementing a hybrid retrieval-augmented generation (RAG) architecture with strict schema validation, we reduced hallucination rates to &lt;0.1% and ensured full regulatory compliance for sensitive data queries.
              </Text>
            </Flex>
          </Grid>
        </Section>

        {/* Agentic Systems - Multi-Step Reasoning (Refined) */}
        <Section>
          <Grid cols={2} gap="3rem">
            <Flex direction="column" align="flex-start" justify="center" className={css`
               @media (max-width: 768px) {
                  order: 2;
               }
            `}>
              <H2>Agentic Systems Architecture</H2>
              <Text>
                We develop robust orchestration layers for multi-step agentic systems. Our focus is on state management and observability, allowing autonomous agents to engage in complex reasoning chains while maintaining a traceable, reversible audit trail. This transforms &quot;black box&quot; AI actions into transparent, managed workflows.
              </Text>
            </Flex>
            <ImageWrapper src="/agentic-reasoning.png" alt="Agentic Reasoning Process" aspectRatio="16/9" />
          </Grid>
        </Section>

        {/* Agentic Systems - Virtual Robotic Loop */}
        <Section>
          <Grid cols={2} gap="3rem">
            <ImageWrapper src="/freaky-nodes.jpg" alt="Autonomous Loop Interface" aspectRatio="16/9" />
            <Flex direction="column" align="flex-start" justify="center">
              <H2>Autonomous Feedback Loops</H2>
              <Text>
                Our research focuses on creating reliable virtual robotic loops. By simulating a continuous feedback cycle of perception, decision, and action with hard safety constraints, we create agents that can adapt to dynamic environments without exceeding defined operational boundaries.
              </Text>
            </Flex>
          </Grid>
        </Section>


        {/* Training Software */}
        <Section>
          <Grid cols={2} gap="3rem">
             <Flex direction="column" align="flex-start" justify="center" className={css`
               @media (max-width: 768px) {
                  order: 2;
               }
            `}>
              <H2>Medical Training Simulation</H2>
              <Text>
                We created a fully featured Vue abstraction for a 3D visualization library used in medical and security imaging. This solution enhances training applications by simulating different imaging scenarios, with features for scene manipulation and real-time parameter adjustments.
              </Text>
            </Flex>
            <ImageWrapper src="/line-drag-demo.gif" alt="Training Software" aspectRatio="16/9" />
          </Grid>
        </Section>

        {/* BIGKit */}
        <Section>
          <Grid cols={2} gap="3rem">
            <ImageWrapper src="/bigkit-hello-world.gif" alt="BIGKit Mission" aspectRatio="4/3" />
            <Flex direction="column" align="flex-start" justify="center">
              <H2>BIGKit CMS</H2>
              <Text>
                BIGKit attempts to bridge the gap between a publish-focused CMS and real application development. It was built from the ground up to include some core tenets an opinionated software engineer might expect from a system builder.
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
          </Grid>
        </Section>

        {/* Voltage Modular */}
        <Section>
          <Grid cols={2} gap="3rem">
             <Flex direction="column" align="flex-start" justify="center" className={css`
               @media (max-width: 768px) {
                  order: 2;
               }
            `}>
              <H2>Voltage Modular Audio</H2>
              <Text>
                We have developed advanced modules for a leading modular synthesis platform, utilizing cutting-edge programming languages to enhance audio processing capabilities. Our innovations include solutions for real-time audio effects and performance-enhancing technologies.
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
                        @media (max-width: 768px) {
                             margin-right: auto;
                        }
                    `}
            />
          </Grid>
        </Section>

      </Container>
    </>
  );
}

export default ProjectsPage;