import React from 'react';
import "../styles/app.scss";
import Canvas from "../components/Canvas";
import Toolbar5 from "../components/Toolbar5";
import SettingBar5 from "../components/SettingBar5";

const Labs5 = () => {
    return (
        <div className="app">
            <Toolbar5/>
            <SettingBar5/>
            <Canvas/>
        </div>
    );
};

export default Labs5;