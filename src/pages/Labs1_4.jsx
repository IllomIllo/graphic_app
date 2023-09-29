import React from 'react';
import "../styles/app.scss";
import Toolbar1_4 from "../components/Toolbar1_4";
import SettingBar1_4 from "../components/SettingBar1_4";
import Canvas from "../components/Canvas";

const Labs1_4 = () => {
    return (
        <div className="app">
            <Toolbar1_4/>
            <SettingBar1_4/>
            <Canvas/>
        </div>
    );
};

export default Labs1_4;