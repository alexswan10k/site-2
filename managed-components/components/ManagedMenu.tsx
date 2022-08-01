import Link from "next/link";
import { FC } from "react";
import { createSchema, dsArray, forComponent } from "react-inline-node-editor";
import { ManagedEditor } from "react-inline-node-editor-bigkit";
import Menu from "./Menu";

const menu = forComponent(Menu, "Menu").withDeepSchema({
    items: dsArray({
        displayName: 'string',
        link: ['./', './about-us', './test', './contact']
    })
}).withSensibleDefault();

export const schema = createSchema([menu]);

const ManagedMenu: FC<{ }> = () => {
    return <ManagedEditor id={"managed-menu"} schema={schema} model={require("./managedMenu.json")} />
}

export default ManagedMenu;