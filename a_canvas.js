// import Table from "./pure_canvas/table.mjs";
import config from "./sub_js/config.mjs";

// let a = function(b,c) {};
// let a = (b,c) => {};


function run_changes(ctx, grid_of_states) {
    const run_changes_ctx = function() {

        // grid_of_states = get_grid(grid_of_states);
        draw_rec(ctx, rec_parameters, grid_of_states);

        // change_rec_location(rec_parameters);
        requestAnimationFrame(run_changes_ctx);
    };
    run_changes_ctx();
    // requestAnimationFrame(run_changes_ctx);
}

const rec_parameters = {
    loc: {x:0, y:0}
}


function rowOfRects(ctx, row, x, y) {
    // let {x, y} = rec_parameters.loc;
    for (let state of row) {
        // console.log(state, x, y)

        if (state == 1) {
            // ctx.strokeStyle = "black";
            ctx.rect(x,y,30,30);
            ctx.fillStyle = "white";
            ctx.fillRect(x,y,30,30);
            ctx.stroke();
            // ctx.clearRect(x-10,y-10,110,110);
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



function draw_rec(ctx, rec_parameters, grid_of_states) {
    let {x, y} = rec_parameters.loc;
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle = "blue";
    
    for (let state of grid_of_states) {
        let row = state;
        // console.log(row, y)
        rowOfRects(ctx, row, x, y);
        y += 30;
    }

    ctx.closePath();

  
}









let button2 = document.querySelector("#clear");

function clear(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function draw_a(ctx, canv) {

    let painting = false;

    function startPosistion(e) {
        painting = true;
        draw2(e);
    }
    function endPosistion() {
        painting = false;
        ctx.beginPath();
    }
    function draw2(e) {
        if(!painting) return;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.fillStyle = "rebeccapurple";

        let x = e.clientX - canv.getBoundingClientRect().left
        let y = e.clientY - canv.getBoundingClientRect().top

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();

        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    canv.addEventListener('mousedown', startPosistion);
    canv.addEventListener('mouseup', endPosistion);
    canv.addEventListener('mousemove', draw2);
 
}

// let grid_of_states;

function get_grid(newgrid) {
    // let newgrid = [[1,0,0,0], [0,0,1,1]]
    for (let i in newgrid) {
        for (let j in newgrid[i]) {
            newgrid[i][j] = !newgrid[i][j];
        }
    }
    return newgrid;
}


(function() {

    // console.log(config.defaults.name2);

    const canvas = document.getElementById("canvas001");
    const ctx = canvas.getContext("2d");


    let grid_of_states = [[1,0,0,0], [0,0,1,1]];
    // let grid_of_states = get_grid();
    // console.log(grid_of_states);
    // grid_of_states = [[1,0,0,0], [0,0,1,1]];
    run_changes(ctx, grid_of_states);

    var canv = document.getElementById('canvas001');
    draw_a(ctx, canv);

    button2.onclick = function(e) {
        clear(ctx, canvas);
        console.log(e);
    };
    window.life_timer = setInterval(get_grid, 1000, grid_of_states)

})();


// clearInterval(window.life_timer)


