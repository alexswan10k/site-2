import { NextPage } from "next"
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";
import SpaceGame from "./components/GameExps/SpaceGm";
import SpaceInvaders from "./components/GameExps/SpaceInvaders";
import MarioGame from "./components/GameExps/MarioGame";

const Test: NextPage = () => 
    <PageContainer title="contact">
        <ManagedMenu />


         <SpaceGame />
         <SpaceInvaders />
         <MarioGame />


    </PageContainer>
export default Test