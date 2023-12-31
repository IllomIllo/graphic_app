import Tool from "./Tool";
import ObjectState from "../store/objectState";

export default class Dots extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
        this.name = 'Dots'
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    point = 0

    endPoint = 0

    mouseDownHandler(e) {
        this.figurInProcces = true
        this.point += 1
        this.currentX = e.pageX - e.target.offsetLeft
        this.currentY = e.pageY - e.target.offsetTop
        this.ctx.beginPath()
        this.ctx.moveTo(this.currentX, this.currentY)
        this.saved = this.canvas.toDataURL()

        if (this.point === 1) {
            this.startX = e.pageX - e.target.offsetLeft
            this.startY = e.pageY - e.target.offsetTop
        }

        if ((Math.abs(this.startX - this.currentX) <= 5) && (Math.abs(this.startY - this.currentY) <= 5) && this.point >= 3) {
            this.figurInProcces = false
            this.endPoint = this.point
            this.point = 0
        }

        ObjectState.setCoordinates(this.currentX, this.currentY)

    }

    mouseUpHandler(e) {
        if (this.figurInProcces) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }

    mouseMoveHandler(e) {
        if (this.figurInProcces) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }

    draw(x, y){
        //домножил на три, чтобы было нормально видно...
        const img = new Image()
        img.src = this.saved
        img.onload = async function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX, this.currentY)
            this.ctx.lineTo(x, y)
            this.ctx.stroke()
        }.bind(this)
    }
}




