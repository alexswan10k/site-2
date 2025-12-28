import { NextPage } from "next"
import Head from "next/head";
import { Navbar } from "../components/ui/Navigation";
import { Container } from "../components/ui/Container";
import { H1, H2, Text } from "../components/ui/Typography";
import { Section } from "../components/ui/Layout";
import { css } from "@emotion/css";

import SpaceGame from "./components/GameExps/SpaceGm";
import SpaceInvaders from "./components/GameExps/SpaceInvaders";
import MarioGame from "./components/GameExps/MarioGame";

const Experiments: NextPage = () =>
    <>
        <Head>
            <title>Experiments | Lambdasafe</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Container className={css`padding-top: 2rem; padding-bottom: 4rem;`}>
            <H1>Experiments</H1>
            <Text>A collection of experimental games and visualizations.</Text>

            <Section>
                <H2>Space Game</H2>
                <div className={css`display: flex; justify-content: center; margin-top: 1rem;`}>
                    <SpaceGame />
                </div>
            </Section>

            <Section>
                <H2>Space Invaders</H2>
                <div className={css`display: flex; justify-content: center; margin-top: 1rem;`}>
                    <SpaceInvaders />
                </div>
            </Section>

            <Section>
                <H2>Mario Game</H2>
                <div className={css`display: flex; justify-content: center; margin-top: 1rem;`}>
                    <MarioGame />
                </div>
            </Section>
        </Container>
    </>
export default Experiments