"use strict";

(function() {
    const canvas = document.getElementById("canvas001");
    const ctx = canvas.getContext("2d");

    const table = {
        size: {width: 360, height: 200},
        color: "#bbb",
        borders: {color: "#333", thickness: 4},
        location: {x:120, y:40},
        wall_friction_loss: 0.6,
    };
    const ball = {
        color: "#111",
        table: table,
        radius: 8,
        location: {x:200, y:50},
        speed: {x: 0.3, y:1},
    }
    ball.absolute_location = function() {
        let tbl_loc = this.table.location;
        let tbl_b_thick = this.table.borders.thickness;
        return {
            x: this.location.x + tbl_loc.x + tbl_b_thick, 
            y: this.location.y + tbl_loc.y + tbl_b_thick}
    };
    ball.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        let loc = this.absolute_location();
        ctx.arc(loc.x, loc.y, this.radius, 0, Math.PI *2);
        ctx.fill()
        ctx.closePath();
    };

    function draw_table() {
        ctx.beginPath();
        
        ctx.fillStyle = table.borders.color;
        ctx.fillRect(
            table.location.x,
            table.location.y,
            table.size.width + 2*table.borders.thickness,
            table.size.height + 2*table.borders.thickness,
        );
        ctx.fillStyle = table.color;
        ctx.fillRect(
            table.location.x + table.borders.thickness,
            table.location.y + table.borders.thickness,
            table.size.width,
            table.size.height,
        );
        ctx.closePath();
    }

    function animation() {
        let x = table.location.x;
        let y = table.location.y;
        let w = table.size.width + 2*table.borders.thickness;
        let h = table.size.height + 2*table.borders.thickness;
        ctx.clearRect(x, y, w, h);
        draw_table();
        ball.draw();
        ball.location.x += ball.speed.x;
        ball.location.y += ball.speed.y;
        let b_loc = ball.location;
        if(b_loc.x >= table.size.width - ball.radius) {
            ball.speed.x *= -table.wall_friction_loss;
            ball.location.x = table.size.width - ball.radius;
        } else if (b_loc.x <= 0 + ball.radius) {
            ball.speed.x *= -table.wall_friction_loss;
            ball.location.x = 0 + ball.radius;
        }
        if (b_loc.y >= table.size.height - ball.radius) {
            ball.speed.y *= -table.wall_friction_loss;
            ball.location.y = table.size.height - ball.radius;
        } else if (b_loc.y <= 0 + ball.radius) {
            ball.speed.y *= -table.wall_friction_loss;
            ball.location.y = 0 + ball.radius;
        }
        // friction_influence(ball);



        requestAnimationFrame(animation);
    }

    function friction_influence(ball) {
        let friction = table.friction;
        if(Math.abs(ball.speed.x) <= friction) {
            ball.speed.x == 0
        }
        if (ball.speed.x > 0) {
            ball.speed.x -= friction
        } else if (ball.speed.x < 0) {
            ball.speed.x += friction
        }

        if(Math.abs(ball.speed.y) <= friction ) {
            ball.speed.y == 0
        } else {

        }

        if (ball.speed.y > 0) {
            ball.speed.y -= friction
        } else if (ball.speed.y < 0) {
            ball.speed.y += friction
        }
    }

    canvas.onmouseup = function (e) {
        let mx = e.clientX - canvas.getBoundingClientRect().x;
        let my = e.clientY - canvas.getBoundingClientRect().y;
        ball.speed.x = -(mx - ball.location.x)/8;
        ball.speed.y = -(my - ball.location.y)/8;
    }
    
    
    animation();

})();