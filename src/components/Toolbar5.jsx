import React from 'react';
import "../styles/toolbar.scss"
import ToolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Dots from "../tools/Dots";
const Toolbar5 = () => {

    return (
        <div className="toolbar">
            <button className="toolbar__btn line" onClick={() => ToolState.setTool(new Dots(canvasState.canvas))}/>
        </div>
    );
};

export default Toolbar5