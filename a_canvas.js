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


// 


let button2 = document.querySelector("#clear");
// button2.addEventListener("click", () => {
//     clear(canv);
//     console.log("Button Clear clicked.");
// });
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

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();

        ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canv.addEventListener('mousedown', startPosistion);
    canv.addEventListener('mouseup', endPosistion);
    canv.addEventListener('mousemove', draw2);
 
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
    var canv = document.getElementById('canvas001');
    draw_a(ctx, canv);

    button2.onclick = function(ctx, canvas) {
        clear(ctx, canvas);
      };

})();



