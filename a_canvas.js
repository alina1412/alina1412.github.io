// import {lifegrid, get_grid} from "./sub_js/life.mjs"; 
import * as life from "./sub_js/life.mjs"; 
import * as drawing from "./sub_js/drawing.mjs";
import * as grid from "./sub_js/grid.mjs";

/*
grid.mjs - the grid (information about the number of cells (n*m) + how to draw it)
  + createGrid(n, m)
  + drawGrid()
  + 
drawing.mjs - working with canvas context

*/

function run_changes(ctx, grid_of_states) {
    const run_changes_ctx = function() {
        grid.draw_cells(ctx, grid.rec_parameters, grid_of_states);
        requestAnimationFrame(run_changes_ctx);
    };
    run_changes_ctx();
}


let button2 = document.querySelector("#clear");
function clear(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


(function() {
    const canvas = document.getElementById("canvas001");
    const ctx = canvas.getContext("2d");

    let grid_of_states = [[1,0,0,0], [0,0,1,1]];
    run_changes(ctx, grid_of_states);

    drawing.draw(ctx, canvas);

    button2.onclick = function(e) {
        clear(ctx, canvas);
        console.log(e);
    };

    window.life_timer = setInterval(life.get_grid, 1000, grid_of_states)

})();




