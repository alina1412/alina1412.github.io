import config from "./config.mjs";
export default class Table {
    constructor(location, size, additional_parameters) {
        this.location = location;
        this.size = size;
        config.init_defaults(this, config.defaults.table, additional_parameters);
        this.content = [];
    }

    locate(Obj, location, additional_parameters) {
        let obj = new Obj(location, additional_parameters);
        obj.container = this;
        this.content.push(obj);
        return obj;
    }

    get content_location() {
        let {x, y} = this.location;
        let bt = this.borders.thickness;
        x += bt;
        y += bt;
        return {x:x, y:y}
    }

    draw(ctx) {
        let {x, y} = this.location; 
        let {width: w, height:h} = this.size;
        let bt = this.borders.thickness;

        ctx.beginPath();
        
        ctx.fillStyle = this.borders.color;
        ctx.fillRect(x, y, w + 2*bt, h + 2*bt);

        ctx.fillStyle = this.color;
        ctx.fillRect(x + bt, y + bt, w, h);
        ctx.closePath();

        for (const obj of this.content) {
            obj.draw(ctx);
        }

    }
}