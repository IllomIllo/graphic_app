import Tool from "./Tool";

export default class LineBrasenhem extends Tool {


    constructor(canvas) {
        super(canvas);
        this.listen()
        this.name = 'LineBrasenhem'
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.currentX = e.pageX-e.target.offsetLeft
        this.currentY = e.pageY-e.target.offsetTop
        this.ctx.beginPath()
        this.ctx.moveTo(this.currentX, this.currentY )
        this.saved = this.canvas.toDataURL()
    }

    mouseUpHandler(e) {
        this.mouseDown = false
        this.lineBTo(this.currentX, this.currentY, e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop)
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.clearC();
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX, this.currentY )
            this.ctx.lineTo(e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop)
            this.ctx.stroke()
        }
    }

    setPixel = (x,y) => {
        let p= this.ctx.createImageData(1,1);
        p.data[0]=190;
        p.data[1]=120;
        p.data[2]=210;
        p.data[3]=255;
        this.ctx.putImageData(p,x,y);
    }

    lineBTo = (x0, y0, x1, y1) => {
        let dx = Math.abs(x1 - x0);
        let dy = Math.abs(y1 - y0);
        let sx = (x0 < x1) ? 1 : -1;
        let sy = (y0 < y1) ? 1 : -1;
        let err = dx - dy;

        while(true) {
            this.setPixel(x0, y0); // Do what you need to for this
            if ((x0 === x1) && (y0 === y1)) break;
            let e2 = 2*err;
            if (e2 > -dy) { err -= dy; x0  += sx; }
            if (e2 < dx) { err += dx; y0  += sy; }
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