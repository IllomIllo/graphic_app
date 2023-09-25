import React from 'react';
import "../styles/toolbar.scss"
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{margin: '0 10px'}}
                id="line-width" defaultValue={2}
                type="number"
                min={1}
                max={50}/>
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input id="stroke-color" type="color" onChange={e => toolState.setStrokeColor(e.target.value)}/>

        </div>
    );
};

export default SettingBar;