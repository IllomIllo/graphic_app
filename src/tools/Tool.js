export default class Tool {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()
    }

    set fillColor(color) {
        this.ctx.fillStyle = color
    }
    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }
    set lineWidth(width) {
        this.ctx.lineWidth = width
    }

   set strokeDash(example){
        this.ctx.setLineDash(example.split(',')); //f для задания шаблона строки (например, штриховой, пунктирной)
    }

    set Coordinates([x,y]){
        this.ctx.setCoordinates(x, y)
    }

    set N(n){
        this.ctx.n = n
    }

    destroyEvents(){
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
}

