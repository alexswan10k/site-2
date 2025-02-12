import { NextPage } from "next"
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";

const Test: NextPage = () => 
    <PageContainer title="contact">
        <ManagedMenu />
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSetHfwSmROnY1kvel3if4G-TVplRLQTkfIcdszU9i5p77visA/viewform?embedded=true" width="100%" height="1024"
         frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
    </PageContainer>
export default Test