import { FC, PropsWithChildren } from "react";


const TestComp: FC<PropsWithChildren<{ text: string }>> = ({ text, children }) => {
    return <div style={{padding: "10px", margin: "10px", backgroundColor: "lightblue" }}>{text}{children}</div>
}

export default TestComp;