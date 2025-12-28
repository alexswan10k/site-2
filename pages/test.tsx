import { NextPage } from "next"
import Head from "next/head";
import { Navbar } from "../components/ui/Navigation";
import { Container } from "../components/ui/Container";
import { H1, Text } from "../components/ui/Typography";
import { css } from "@emotion/css";

const Test: NextPage = () =>
    <>
        <Head>
            <title>Test Page | Lambdasafe</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Container className={css`padding-top: 2rem;`}>
            <H1>Test Page</H1>
            <Text>This is a placeholder for test content.</Text>
        </Container>
    </>
export default Test