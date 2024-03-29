import { NextPage } from "next"
import { ManagedEditor } from "react-inline-node-editor-bigkit"
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";
import { schema } from "../managed-components/schema";

const Test: NextPage = () => 
    <PageContainer title="test">
        <ManagedMenu />
        <ManagedEditor id={"test"} schema={schema} model={require("./test.json")} />
    </PageContainer>
export default Test