import { NextPage } from "next";
import PageContainer from "../components/PageContainer";
import ReactMarkdown from 'react-markdown'

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
    <PageContainer title="privacy-policy">
        <ReactMarkdown>
            {md}
        </ReactMarkdown>
    </PageContainer>

export default PrivacyPolicy