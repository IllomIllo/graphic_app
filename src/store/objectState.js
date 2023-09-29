import {makeAutoObservable} from "mobx";
import Dots from "../tools/Dots";
import goUp from "../helpers/goUp";


class ObjectState {

    x = []
    y = []
    n = 10
    constructor() {
        makeAutoObservable(this)
    }

    setN(e){
        this.n = e
    }

    setCoordinates(x, y) {
        this.x.push(x);
        this.y.push(y);
    }

    setCoordinatesUp(){
        const newY = this.y.map(num => num + this.n);
        this.y = newY;
        //Dots.this.goUp();
    }
}

export default new ObjectState();