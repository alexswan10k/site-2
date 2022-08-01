import { NextPage } from "next"
import { ManagedEditor } from "react-inline-node-editor-bigkit"
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";
import { schema } from "../managed-components/schema";

const Test: NextPage = () => 
    <PageContainer title="about-us">
        <ManagedMenu />
        <ManagedEditor id={"about-us"} schema={schema} model={require("./about-us.json")} />
    </PageContainer>
export default Test