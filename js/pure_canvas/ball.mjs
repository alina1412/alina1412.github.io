import config from "./config.mjs";
export default class Ball {
    constructor(location, additional_parameters) {
        this.location = location;
        config.init_defaults(this, config.defaults.ball, additional_parameters);
    }

    get absolute_location() {
        let {x, y} = this.location;
        if ("container" in this) {
            let {x:cx, y:cy} = this.container.content_location
            x += cx;
            y += cy;
        }
        return {x:x, y:y}
    }

    draw(ctx) {
        let {x, y} = this.absolute_location;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x, y, this.radius, 0, Math.PI *2);
        ctx.fill()
        ctx.closePath();
    };

    tick() {
        this.location.x += this.speed.x;
        this.location.y += this.speed.y;
        let {x, y} = this.location;
        let wall_friction_loss = config.environment.speed_loss_on_impact_multiplier
        let {width: w, height:h} = this.container.size;

        if(x >= w - this.radius) {
            this.speed.x *= -wall_friction_loss;
            this.location.x = w - this.radius;
        } else if (x <= 0 + this.radius) {
            this.speed.x *= -wall_friction_loss;
            this.location.x = 0 + this.radius;
        }
        if (y >= h - this.radius) {
            this.speed.y *= -wall_friction_loss;
            this.location.y = h - this.radius;
        } else if (y <= 0 + this.radius) {
            this.speed.y *= -wall_friction_loss;
            this.location.y = 0 + this.radius;
        }
    }
}