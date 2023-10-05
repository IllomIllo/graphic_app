import {makeAutoObservable} from "mobx";
import ToolState from "./toolState";
import Tool from "../tools/Tool";

class ObjectState {

    x = []
    y = []
    n = 10
    constructor() {
        makeAutoObservable(this);
        //this.listen();
        this.name = 'Dots'
    }

    setN(e){
        this.n = e
    }

    setCoordinates(x, y) {
        this.x.push(x);
        this.y.push(y);
    }

    setCoordinatesUp(){
        const new_Y = this.y.map(num => parseInt(num) - this.n);
        this.y = new_Y;
        this.cleaning("up");
        this.render();
    }

    setCoordinatesDown(){
        const new_Y = this.y.map(num => (+num) + (+this.n));
        this.y = new_Y;
        this.cleaning("down");
        this.render();
    }

    setCoordinatesRight(){
        const new_X = this.x.map(num => (+num) + (+this.n));
        this.x = new_X;
        this.cleaning("right");
        this.render();
    }

    setCoordinatesLeft(){
        const new_X = this.x.map(num => (+num) - (+this.n));
        this.x = new_X;
        this.cleaning("left");
        this.render();
    }

    render(){

        this.canvas = ToolState.tool.canvas
        this.saved = this.canvas.toDataURL()
        this.ctx = this.canvas.getContext('2d')
        const img = new Image()
        img.src = this.saved

        img.onload = async function () {
            this.ctx.beginPath()
            for(let i = 0; i <= this.x.length; i++) {
                this.ctx.lineWidth = 1
                this.ctx.strokeStyle = "black"
                //drawing
                if (i < this.x.length) {
                    this.ctx.moveTo(this.x[i], this.y[i])
                    this.ctx.lineTo(this.x[i + 1], this.y[i + 1])
                } else {
                    this.ctx.moveTo(this.x[i], this.y[i])
                    this.ctx.lineTo(this.x[0], this.y[0])
                }
            }
            this.ctx.stroke() //обводка
        }.bind(this)
    }

    cleaning(direction){
        this.canvas = ToolState.tool.canvas
        this.saved = this.canvas.toDataURL()
        this.ctx = this.canvas.getContext('2d')
        const img = new Image()
        img.src = this.saved

        img.onload = async function () {
            this.ctx.beginPath()
            this.ctx.strokeStyle = "white"
            this.ctx.lineWidth = 3

            switch(direction){
                case "left":
                    for (let i = 0; i <= this.x.length; i++) {
                        if (i < this.x.length) {
                            this.ctx.moveTo((+this.x[i]) + (+this.n), this.y[i])
                            this.ctx.lineTo((+this.x[i + 1]) + (+this.n), this.y[i + 1])
                        } else {
                            this.ctx.moveTo((+this.x[i]) + (+this.n), this.y[i])
                            this.ctx.lineTo((+this.x[0]) + (+this.n), this.y[0])
                        }
                    }
                    break;
                case "right":
                    for (let i = 0; i <= this.x.length; i++) {
                        if (i < this.x.length) {
                            this.ctx.moveTo(this.x[i] - this.n, this.y[i])
                            this.ctx.lineTo(this.x[i + 1] - this.n, this.y[i + 1])
                        } else {
                            this.ctx.moveTo(this.x[i] - this.n, this.y[i])
                            this.ctx.lineTo(this.x[0] - this.n, this.y[0])
                        }
                    }
                    break;
                case "up":
                    for (let i = 0; i <= this.x.length; i++) {
                        if (i < this.x.length) {
                            this.ctx.moveTo(this.x[i], (+this.y[i]) + (+this.n))
                            this.ctx.lineTo(this.x[i + 1], (+this.y[i + 1]) + (+this.n))
                        } else {
                            this.ctx.moveTo(this.x[i], (+this.y[i]) + (+this.n))
                            this.ctx.lineTo(this.x[0], (+this.y[0]) + (+this.n))
                        }
                    }
                    break;
                case "down":
                    for (let i = 0; i <= this.x.length; i++) {
                        if (i < this.x.length) {
                            this.ctx.moveTo(this.x[i], this.y[i] - this.n)
                            this.ctx.lineTo(this.x[i + 1], this.y[i + 1] - this.n)
                        } else {
                            this.ctx.moveTo(this.x[i], this.y[i] - this.n)
                            this.ctx.lineTo(this.x[0], this.y[0] - this.n)
                        }
                    }
                    break;
                default:
                    console.log(`Sorry, we are out of ${direction}.`)
                    break;
            }
            this.ctx.stroke() //обводка
        }.bind(this)
    }
}

export default new ObjectState();