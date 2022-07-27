import { createSchema, dsArray, forComponent } from "react-inline-node-editor";
import Menu from "./components/Menu";
import TestComp from "./components/TestComp";

const testComp = forComponent(TestComp, "TestComp").withDeepSchema({
    text: 'string'
}).withSensibleDefault();

const menu = forComponent(Menu, "Menu").withDeepSchema({
    items: dsArray({
        displayName: 'string',
        link: ['./index', './test']
    })
}).withSensibleDefault();

export const schema = createSchema([testComp, menu]);