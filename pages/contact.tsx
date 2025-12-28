import { NextPage } from "next"
import Head from "next/head";
import { Navbar } from "../components/ui/Navigation";
import { Container } from "../components/ui/Container";

const Contact: NextPage = () =>
    <>
        <Head>
            <title>Contact | Lambdasafe</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Container>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSetHfwSmROnY1kvel3if4G-TVplRLQTkfIcdszU9i5p77visA/viewform?embedded=true"
                width="100%"
                height="1024"
                frameBorder="0"
                style={{ border: 0, marginTop: '2rem' }}
            >
                Loading…
            </iframe>
        </Container>
    </>
export default Contact