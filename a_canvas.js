// import Table from "./pure_canvas/table.mjs";
import config from "./sub_js/config.mjs";

// let a = function(b,c) {};
// let a = (b,c) => {};


function run_changes(ctx) {
    const run_changes_ctx = function() {
        draw_rec(ctx, rec_parameters);
        change_rec_location(rec_parameters);
        requestAnimationFrame(run_changes_ctx);
    };
    run_changes_ctx();
    // requestAnimationFrame(run_changes_ctx);
}

const rec_parameters = {
    loc: {x:0, y:0}
}


function draw_rec(ctx, rec_parameters) {

    // console.log(rec_parameters);

    let {x, y} = rec_parameters.loc;
    ctx.beginPath();
    ctx.clearRect(x-10,y-10,110,110);
    ctx.fillStyle = "blue";
    ctx.fillRect(x,y,100,100); 
    ctx.closePath();
}


function change_rec_location(rec_parameters) {
    let {x, y} = rec_parameters.loc;
    //...
    x += 2;
    y += 2;
    rec_parameters.loc.x = x;
    rec_parameters.loc.y = y;

}

(function() {

    // console.log(config.defaults.name2);

    const canvas = document.getElementById("canvas001");
    const ctx = canvas.getContext("2d");

    
    // ctx.rect(20,20,150,100);
    // if (ctx.isPointInPath(20,50))
    // {
    //  ctx.stroke();
    // };
    //draw_rec(ctx, rec_parameters);
    run_changes(ctx);


})();
