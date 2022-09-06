import { NextPage } from "next"
import { ManagedEditor } from "react-inline-node-editor-bigkit"
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";
import { schema } from "../managed-components/schema";

const Test: NextPage = () => 
    <PageContainer title="contact">
        <ManagedMenu />
        <ManagedEditor id={"contact"} schema={schema} model={require("./contact.json")} />
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSetHfwSmROnY1kvel3if4G-TVplRLQTkfIcdszU9i5p77visA/viewform?embedded=true" width="640" height="677"
         frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
         <div>test123</div> */}
    </PageContainer>
export default Test