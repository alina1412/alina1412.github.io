
export default class Drawer {
    constructor(ctx) {
        this.ctx = ctx;
        this.style = {border: {
            color: "#444",
            thickness: 2
        }};
    }

    set_style(style) {
        // style == {fillColor: "#123", border: ..., }
        this.style = style;
    }

    draw_square(position, size, fillColor) {
        let ctx = this.ctx;
        let b_color = this.style.border.color;
        let b_thick = this.style.border.thickness;
        let [x, y] = position
        ctx.beginPath();
        ctx.fillStyle = b_color;
        ctx.fillRect(x, y, size, size);
        ctx.fillStyle = fillColor;
        ctx.fillRect(x + b_thick, y + b_thick
            , size - 2*b_thick, size - 2*b_thick);
        ctx.closePath();
    }
    
    // if (state == 1) {
    //         ctx.rect(x,y,30,30);
    //         ctx.fillStyle = "white";
    //         ctx.fillRect(x,y,30,30);
    //         ctx.stroke();

    // function paintByMouse(e) {
    //     if(!painting) return;
    //     ctx.lineWidth = 8;
    //     ctx.lineCap = 'round';
    //     ctx.fillStyle = "rebeccapurple";

    //     let x = e.clientX - canv.getBoundingClientRect().left
    //     let y = e.clientY - canv.getBoundingClientRect().top
    //     ctx.beginPath();
    //     ctx.lineTo(x, y);
    //     ctx.stroke();
    //     ctx.arc(x, y, 10, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.moveTo(x, y);
    //     ctx.closePath();
    // }



}