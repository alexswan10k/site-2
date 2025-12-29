import type { NextPage } from 'next'
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/ui/Navigation";
import { Container } from "../components/ui/Container";
import { H1, H2, H3, Text } from "../components/ui/Typography";
import { Grid, Flex, Section } from "../components/ui/Layout";
import { ImageWrapper } from "../components/ui/Media";
import { FadeIn, FadeFromLeft } from "../components/ui/Animations";
import { Button } from "../components/ui/Button";
import { css } from "@emotion/css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Lambdasafe</title>
        <meta name="description" content="Lambdasafe - Engineering Trust in an AI World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container className={css`
            min-height: calc(100vh - 80px);
            display: flex;
            align-items: center;
            @media (max-width: 768px) {
                min-height: auto;
                padding-top: 3rem;
                padding-bottom: 3rem;
                align-items: flex-start;
            }
      `}>
        <Grid cols={2} gap="4rem" className={css`width: 100%;`}>
          {/* Logo Left */}
          <Flex justify="center" className={css`
            @media (max-width: 768px) {
                order: 1;
            }
          `}>
            <FadeIn duration={1}>
              <ImageWrapper
                src="/lambda.png"
                alt="Lambda Logo"
                layout="fill"
                wrapperClassName={css`
                            width: 400px; 
                            height: 400px; 
                            background-color: transparent;
                            @media (max-width: 768px) {
                                width: 250px;
                                height: 250px;
                            }
                        `}
                objectFit="contain"
              />
            </FadeIn>
          </Flex>

          {/* Text Right */}
          <Flex direction="column" align="flex-start" justify="center" className={css`
                @media (max-width: 768px) {
                    order: 2;
                    align-items: center;
                    text-align: center;
                }
          `}>
            <FadeFromLeft duration={3} delay={0.5}>
              <H1 className={css`
                        font-family: 'Verdana', sans-serif;
                        font-size: 3.5rem;
                        line-height: 1.1;
                        margin-bottom: 1.5rem;
                        @media (max-width: 768px) {
                            font-size: 2.5rem;
                        }
                     `}>
                Engineering Trust in an AI World
              </H1>
            </FadeFromLeft>

            <FadeFromLeft duration={3} delay={1}>
              <H3 className={css`
                        font-family: 'Oxygen', sans-serif;
                        font-size: 1.25rem;
                        font-weight: 500;
                        color: #475569;
                        margin-bottom: 2rem;
                        line-height: 1.6;
                        @media (max-width: 768px) {
                            font-size: 1.125rem;
                        }
                    `}>
                While AI is probabilistic, business logic must be deterministic. We ensure your AI systems are secure, scalable, and correct.
              </H3>
            </FadeFromLeft>

            <FadeFromLeft duration={3} delay={1.5}>
                 <Link href="/contact" passHref>
                    <Button size="lg">
                        Book a Technical Audit
                    </Button>
                 </Link>
            </FadeFromLeft>
          </Flex>
        </Grid>
      </Container>

      <Container>
         <Section className={css`padding-bottom: 4rem;`}>
            <FadeIn duration={1} delay={0.5}>
                <Grid cols={3} gap="2rem">
                    {/* Service 1 */}
                    <div className={css`
                        background: #f8fafc;
                        padding: 2rem;
                        border-radius: 12px;
                        border: 1px solid #e2e8f0;
                        transition: transform 0.2s;
                        &:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        }
                    `}>
                        <H2 className={css`font-size: 1.5rem; margin-bottom: 1rem;`}>AI Systems Architecture</H2>
                        <Text className={css`font-weight: 600; color: #64748b; margin-bottom: 1rem;`}>The Glue</Text>
                        <Text>
                            Orchestration, state management, and connecting probabilistic agents to rigid legacy databases safely.
                        </Text>
                    </div>

                    {/* Service 2 */}
                    <div className={css`
                        background: #f8fafc;
                        padding: 2rem;
                        border-radius: 12px;
                        border: 1px solid #e2e8f0;
                        transition: transform 0.2s;
                        &:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        }
                    `}>
                         <H2 className={css`font-size: 1.5rem; margin-bottom: 1rem;`}>Model Validation & Evals</H2>
                         <Text className={css`font-weight: 600; color: #64748b; margin-bottom: 1rem;`}>The Audit</Text>
                        <Text>
                           Building test harnesses, &quot;Unit Tests for AI,&quot; and verifying output quality before deployment.
                        </Text>
                    </div>

                    {/* Service 3 */}
                    <div className={css`
                        background: #f8fafc;
                        padding: 2rem;
                        border-radius: 12px;
                        border: 1px solid #e2e8f0;
                        transition: transform 0.2s;
                         &:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        }
                    `}>
                         <H2 className={css`font-size: 1.5rem; margin-bottom: 1rem;`}>Enterprise Refactoring</H2>
                         <Text className={css`font-weight: 600; color: #64748b; margin-bottom: 1rem;`}>The Hardening</Text>
                        <Text>
                            Focus on taking internal &quot;Shadow IT&quot; tools or prototypes generated by non-technical teams and rewriting them into robust, production-grade software.
                        </Text>
                    </div>
                </Grid>
            </FadeIn>
         </Section>
      </Container>
    </>
  )
}

export default Home
