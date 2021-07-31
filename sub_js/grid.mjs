export function draw_cells(ctx, rec_parameters, grid_of_states) {
    let {x, y} = rec_parameters.loc;
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle = "blue";
    
    for (let row of grid_of_states) {
        draw_rows(ctx, row, x, y);
        y += 30;
    }
    ctx.closePath();
}

export function draw_rows(ctx, row, x, y) {
    for (let state of row) {
        if (state == 1) {
            ctx.rect(x,y,30,30);
            ctx.fillStyle = "white";
            ctx.fillRect(x,y,30,30);
            ctx.stroke();
        }
        else {
            ctx.rect(x,y,30,30);
            ctx.fillStyle = "black";
            ctx.fillRect(x,y,30,30);
            ctx.stroke();
        }
        x += 30;
    }
}


export const rec_parameters = {
    loc: {x:0, y:0}
}