

// const objp = {
//     point: get_point(canvas),
// };


// function get_point(canvas) {

//     return 1999;
// }


export function draw_init_states(ctx, canv) {
    let collect_points = [];
    let buf = [];
    let isMouseClicked = false;
    // if (isMouseClicked) {
    //     // return buf;
    //     pass
    // }

    function changeCords(e) {
        let x = e.clientX - canv.getBoundingClientRect().left;
        let y = e.clientY - canv.getBoundingClientRect().top;
        x = Math.floor(x);
        y = Math.floor(y);
        // return [x,y];
        buf.push([x,y]);
        collect_points.push([x,y]);
    }

    
    function collecting(e) {
        isMouseClicked = true;
        changeCords(e);
        isMouseClicked = false;
        // return collect_points;
        console.log(collect_points);
        
    }
    canv.addEventListener('mousedown', collecting);
    canv.addEventListener('mouseup', function(e) {
        isMouseClicked = false;
    });
   
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
// export {objp}; 