import Table from "./pure_canvas/table.mjs";
import Ball from "./pure_canvas/ball.mjs";
// import config from "./pure_canvas/config.mjs";

(function() {
    const canvas = document.getElementById("canvas001");
    const ctx = canvas.getContext("2d");

    const table = new Table({x:120, y:40}
        , {width: 360, height: 200}
        );

    const ball = table.locate(Ball, {x:20, y:50}); //new Ball({x:200, y:50});
    ball.speed = {x: 0.3, y:1};

    function animation() {
        let {x, y} = table.location;
        let bt = table.borders.thickness;
        let {width: w, height:h} = table.size;
        w += 2*bt;
        h += 2*bt;
        ctx.clearRect(x, y, w, h);
        table.draw(ctx);
        ball.tick();

        requestAnimationFrame(animation);
    }

    canvas.onmouseup = function (e) {
        let mx = e.clientX - canvas.getBoundingClientRect().x;
        let my = e.clientY - canvas.getBoundingClientRect().y;

        let {x, y} = ball.absolute_location;

        ball.speed.x = -(mx - x)/8;
        ball.speed.y = -(my - y)/8;
    }
    
    
    animation();

})();