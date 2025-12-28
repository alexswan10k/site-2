import type { NextPage } from 'next'
import Head from "next/head";
import { Navbar } from "../components/ui/Navigation";
import { Container } from "../components/ui/Container";
import { H1, H3 } from "../components/ui/Typography";
import { Grid, Flex } from "../components/ui/Layout";
import { ImageWrapper } from "../components/ui/Media";
import { FadeIn, FadeFromLeft } from "../components/ui/Animations";
import { css } from "@emotion/css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Lambdasafe</title>
        <meta name="description" content="Lambdasafe - Your Solution Is Right Here" />
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
        <Grid cols={2} gap="2rem" className={css`width: 100%;`}>
          {/* Logo Left */}
          <Flex justify="center">
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
                    align-items: center;
                    text-align: center;
                }
          `}>
            <FadeFromLeft duration={3} delay={1}>
              <H1 className={css`
                        font-family: 'Verdana', sans-serif;
                        font-size: 5rem;
                        letter-spacing: 4.3px;
                        line-height: 1;
                        @media (max-width: 768px) {
                            font-size: 3rem;
                        }
                     `}>
                LambdaSafe
              </H1>
            </FadeFromLeft>

            <FadeFromLeft duration={3} delay={2}>
              <H3 className={css`
                        font-family: 'Oxygen', sans-serif;
                        font-size: 1.5rem;
                        letter-spacing: 0.9em;
                        font-weight: 500;
                        margin-top: 2rem;
                        color: #64748b;
                         @media (max-width: 768px) {
                            font-size: 1rem;
                            letter-spacing: 0.5em;
                            margin-top: 1rem;
                        }
                    `}>
                YOUR SOLUTION IS RIGHT HERE...
              </H3>
            </FadeFromLeft>
          </Flex>
        </Grid>
      </Container>
    </>
  )
}

export default Home
