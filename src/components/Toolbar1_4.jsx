import React from 'react';
import "../styles/toolbar.scss"
import ToolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import Line from "../tools/Line";
import Eraser from "../tools/Eraser";
import Circle from "../tools/Circle";
import toolState from "../store/toolState";
import LineBrasenhem from "../tools/LineBrasenhem";
import CircleBrasenhem from "../tools/CircleBrasenhem";

const Toolbar1_4 = () => {

    const changeColor = e => {
        toolState.setFillColor(e.target.value)
    }

    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => ToolState.setTool(new Brush(canvasState.canvas))}/>
            <button className="toolbar__btn rect" onClick={() => ToolState.setTool(new Rect(canvasState.canvas))}/>
            <button className="toolbar__btn eraser" onClick={() => ToolState.setTool(new Eraser(canvasState.canvas))}/>
            <button className="toolbar__btn line" onClick={() => ToolState.setTool(new Line(canvasState.canvas))}/>
            <button className="toolbar__btn circle" onClick={() => ToolState.setTool(new Circle(canvasState.canvas))}/>
            <button className="toolbar__btn lineBrasenhem" onClick={() => ToolState.setTool(new LineBrasenhem(canvasState.canvas))}/>
            <button className="toolbar__btn circleBrasenhem" onClick={() => ToolState.setTool(new CircleBrasenhem(canvasState.canvas))}/>
            <input onChange={e => changeColor(e)} style={{marginLeft:10}} type="color"/>
            <button className="toolbar__btn undo"/>
            <button className="toolbar__btn redo"/>
            <button className="toolbar__btn save"/>
        </div>
    );
};

export default Toolbar1_4;