import { createSchema, dsArray, dsNullable, forComponent } from "react-inline-node-editor";
import { FadeFromLeft, FadeIn } from "./components/Animations";
import { LambdaLogo } from "./components/ImageWrappers";
import Menu from "./components/Menu";
import TestComp from "./components/TestComp";

const testComp = forComponent(TestComp, "TestComp").withDeepSchema({
    text: 'string'
}).withSensibleDefault();

const menu = forComponent(Menu, "Menu").withDeepSchema({
    items: dsArray({
        displayName: 'string',
        link: ['./index', './about-us', './test']
    })
}).withSensibleDefault();

const iwLambdaLogo = forComponent(LambdaLogo, "LambdaLogo").withDeepSchema({}).withSensibleDefault();

const fadeIn = forComponent(FadeIn, "FadeIn").withDeepSchema({duration: dsNullable("number"), delay: dsNullable("number") }).withSensibleDefault();
const fadeFromLeft = forComponent(FadeFromLeft, "FadeFromLeft").withDeepSchema({duration: dsNullable("number"), delay: dsNullable("number") }).withSensibleDefault();

export const schema = createSchema([
    testComp, 
    menu, 
    iwLambdaLogo,
    fadeIn,
    fadeFromLeft
]);