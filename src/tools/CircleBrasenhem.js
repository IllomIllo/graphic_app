import Tool from "./Tool";


export default class CircleBrasenhem extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
        this.name = 'CircleBrasenhem'
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseDownHandler(e){
        this.mouseDown = true
        let canvasData = this.canvas.toDataURL()
        this.ctx.beginPath()
        this.startX = e.pageX-e.target.offsetLeft
        this.startY = e.pageY-e.target.offsetTop
        this.saved = canvasData
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            this.clearC()
             let currentX =  e.pageX-e.target.offsetLeft
             let currentY =  e.pageY-e.target.offsetTop
             let width = currentX-this.startX
             let height = currentY-this.startY
             this.r= Math.sqrt(width**2 + height**2)
             //this.draw(this.startX, this.startY, this.r)

        }
    }

    mouseUpHandler(e) {
        // this.clearC()
        this.mouseDown = false
        this.circleBTo(this.startX, this.startY, this.r)
    }

    draw(x,y,r) {
        const img = new Image()
        img.src = this.saved
        img.onload = async function () {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x, y, r, 0, 2*Math.PI)
            this.ctx.fill()
            this.ctx.stroke()
        }.bind(this)

    }

    putPixel =  (x, y) => {//Метод для установки цвета пиксела
        let p= this.ctx.createImageData(1,1);
        let index = (y * p.width + x) * 4;
        p.data[0] = 188;
        p.data[1] = 199;
        p.data[2] = 120;
        p.data[3] = 179;
        this.ctx.putImageData(p,x,y);
    }

    //Рисование окружности методом Брезенхэма
    circleBTo = (X1, Y1, R) => {
        let x = 0, y = R;
        let delta = 1 - 2 * R;
        let error = 0;
        while (y >= 0) {
            this.putPixel (X1 + x, Y1 + y);
            this.putPixel (X1 + x, Y1 - y);
            this.putPixel (X1 - x, Y1 + y);
            this.putPixel (X1 - x, Y1 - y);
            error = 2 * (delta + y) - 1;
            if (delta < 0 && error <= 0) {
                delta += 2 * ++x + 1; continue
            }
            error = 2 * (delta - x) - 1;
            if (delta > 0 && error > 0) {
                delta += 1 - 2 * --y; continue;
            }
            x++;
            delta += 2 * (x - y);
            y--;
        }
    }
    clearC(){
        const img = new Image()
        img.src = this.saved
        img.onload = async function () {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
        }.bind(this)
    }
}

//test