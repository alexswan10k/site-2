import { NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from 'react-markdown'
import { Navbar } from "../../components/ui/Navigation";
import { Container } from "../../components/ui/Container";
import { css } from "@emotion/css";

const md = `
# Privacy Policy

## 1. Introduction
Our Android App, Organizator, developed by Lambdasafe, respects your privacy and is committed to protecting it. This privacy policy will inform you about how we handle your data, your privacy rights, and how the law protects you.

## 2. Data We Collect
We do not collect, use, store, or transfer any personal data from our users.

## 3. How We Use Your Data
As we do not collect any personal data, there is no usage of such data.

## 4. Data Security
Even though we do not collect personal data, we have put in place appropriate security measures to prevent any potential data loss, misuse, or unauthorized access.

## 5. Your Legal Rights
Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.


## 6. Third-Party Links
Our app may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.

## 7. Cookies
Our app does not use cookies.

## 8. Changes to the Privacy Policy
We may update our privacy policy from time to time. Thus, you are advised to review this page periodically for any changes.

## 9. Children's Privacy
Our app does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.

## 10. Contact Us
If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us at alex.lambdasafe@gmail.com.
`

const PrivacyPolicy: NextPage = () =>
    <>
        <Head>
            <title>Privacy Policy | Organizator</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Container className={css`padding-top: 2rem; padding-bottom: 4rem;`}>
            <div className={css`
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
                color: #334155;
                h1, h2, h3 { 
                    font-family: 'Outfit', 'Inter', sans-serif;
                    color: #0f172a; 
                    margin-top: 1.5em; 
                    margin-bottom: 0.5em; 
                    font-weight: 700;
                }
                h1 { font-size: 2.5rem; }
                h2 { font-size: 1.75rem; }
                p { margin-bottom: 1rem; }
                a { color: #6366f1; text-decoration: none; &:hover { text-decoration: underline; } }
            `}>
                <ReactMarkdown>
                    {md}
                </ReactMarkdown>
            </div>
        </Container>
    </>

export default PrivacyPolicy