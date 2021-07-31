export function draw_init_states(ctx, canv) {
    // TODO
    let collect_points = [];
    let x = e.clientX - canv.getBoundingClientRect().left
    let y = e.clientY - canv.getBoundingClientRect().top

}

export function draw(ctx, canv) {
    let painting = false;

    function startPosistion(e) {
        painting = true;
        paintByMouse(e);
    }
    function endPosistion() {
        painting = false;
        ctx.beginPath();
    }
    function paintByMouse(e) {
        if(!painting) return;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.fillStyle = "rebeccapurple";

        let x = e.clientX - canv.getBoundingClientRect().left
        let y = e.clientY - canv.getBoundingClientRect().top
        ctx.beginPath();
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.moveTo(x, y);
        ctx.closePath();
    }

    canv.addEventListener('mousedown', startPosistion);
    canv.addEventListener('mouseup', endPosistion);
    canv.addEventListener('mousemove', paintByMouse);
 
}
