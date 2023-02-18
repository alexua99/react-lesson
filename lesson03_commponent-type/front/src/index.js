import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header, HeaderAside, HeaderMobile} from "./componentType/functionComp";
import {MainSection} from "./componentType/arrowComponent";
import SectionTwo from "./componentType/cassComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <HeaderAside/>
        <HeaderMobile/>
        <MainSection/>
        <SectionTwo />
    </React.StrictMode>
);

