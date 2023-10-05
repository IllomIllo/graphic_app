import React from 'react';
import "../styles/toolbar.scss"
import toolState from "../store/toolState";
import ObjectState from "../store/objectState";

const SettingBar5 = () => {

    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Шаблон линии (1,2,3,...)</label>
            <input
                type="text"
                style={{margin: '0 10px'}}
                onChange={e => toolState.setStrokeDash(e.target.value)}
                id="line-width" defaultValue={2}
            />
            <label style={{margin: '0 4px'}} >Шаг поворота</label>
            <input style={{margin: '0 4px'}}
                   id="n" defaultValue={10}
                   type="number"
                   min={1}
                   max={50}
                   onChange={e => ObjectState.setN(e.target.value)}/>
            <label style={{margin: '0 4px'}} >Угол разворота</label>
            <input style={{margin: '0 4px'}}  type="number"/>
            <button style={{margin: '0 4px'}}
                    onClick={e => {
                        ObjectState.setCoordinatesUp();
                        console.log(ObjectState.y);
                    }}
            >
                Вверх
            </button>
            <button style={{margin: '0 4px'}}
                    onClick={e => {
                        ObjectState.setCoordinatesDown();
                        console.log(ObjectState.y);
                    }} >
                Вниз
            </button>
            <button style={{margin: '0 4px'}}
                    onClick={e => {
                        ObjectState.setCoordinatesRight();
                        console.log(ObjectState.x);
                    }} >
                Вправо
            </button>
            <button style={{margin: '0 4px'}}
                    onClick={e => {
                        ObjectState.setCoordinatesLeft();
                        console.log(ObjectState.x);
                    }} >
                Влево
            </button>
            <button style={{margin: '0 4px'}} onClick={() => {}} >По часовой</button>
            <button style={{margin: '0 4px'}} onClick={() => {}} >Против часовой</button>
            <button style={{margin: '0 4px'}} onClick={() => {}} >+</button>
            <button style={{margin: '0 4px'}} onClick={() => {}} >-</button>
        </div>
    );
};

export default SettingBar5;