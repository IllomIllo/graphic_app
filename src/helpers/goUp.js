// import ObjectState from "../store/objectState";
//
// export default function goUp (){
//     for (let i = 0; i <= ObjectState.x.length; i++) {
//         const img = new Image()
//         img.src = this.saved
//         img.onload = () => {
//             this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //удаляем "побочные" прямоугольники
//             this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height) // возвращаем картинку, которая была нарисована
//             // перед началом рисования прямоугольника
//             this.ctx.beginPath()
//             this.ctx.lineTo(ObjectState.x[i], ObjectState.y[i])
//             // this.ctx.rect(x, y, w, h)
//             // this.ctx.fill() //заливка
//             this.ctx.stroke() //обводка
//         }
//     }
// }