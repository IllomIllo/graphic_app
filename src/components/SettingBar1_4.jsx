import React from 'react';
import "../styles/toolbar.scss"
import toolState from "../store/toolState";

const SettingBar1_4 = () => {
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
            <label htmlFor="line-width">Шаблон линии (1,2,3,...)</label>
            <input
                type="text"
                onChange={e => toolState.setStrokeDash(e.target.value)}
                style={{margin: '0 10px'}}
                id="line-width" defaultValue={2}
            />
        </div>
    );
};

export default SettingBar1_4;