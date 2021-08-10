import Grid from "./grid.mjs";
import LifeRule from "./life_rule.mjs";
import Drawer from "./drawer.mjs";

const CELL_SIZE = 16; // in pixels

class Life {
  static calculate_grid_size(canvas) {
    let cells_in_one_row = Math.floor(canvas.width / CELL_SIZE);
    let rows = Math.floor(canvas.height / CELL_SIZE);
    return {cells_in_one_row: cells_in_one_row, rows: rows};
  }

  constructor(canvas) {
    /**
     * const ctx = canvas.getContext("2d");
     * 
     * function run_changes(ctx, grid_of_states) {
    const run_changes_ctx = function() {
        grid.draw_cells(ctx, grid.rec_parameters, grid_of_states);
        if (drawing.isMouseClicked) {
            // console.log(drawing.draw_init_states.collect_points);
        }
        
        requestAnimationFrame(run_changes_ctx);
    };
    run_changes_ctx();
}
     */
    this.canvas = canvas;

    this.rule = new LifeRule("B3/S23")

    this.animation_timer_id = null;

    this.drawer = new Drawer(canvas.getContext("2d"));

    let grid_size = Life.calculate_grid_size(canvas);
    this.grid = new Grid(grid_size.cells_in_one_row
      , grid_size.rows, CELL_SIZE);
    this.grid.render(this.drawer);
    // console.log("Life::constructor")
  }

  animation_start() {
    if (this.animation_timer_id) {
      console.log("the animation is already on");
    } else {
      console.log("animation_start");
      let rule = this.rule;
      let grid = this.grid;
      let drawer = this.drawer;
      let tick = function() {
        rule.develop(grid);
        grid.render(drawer);
      };
      this.animation_timer_id = setInterval(tick, 500);
    }

    return;
  }

  animation_stop() {
    console.log("animation_stop");
    clearInterval(this.animation_timer_id);
    this.animation_timer_id = null;
    return;
  }

  clear_grid() {
    console.log("clear_grid");
    this.grid.clear();
    this.grid.render(this.drawer);
  }

  randomize_grid() {
    console.log("randomize_grid");
    this.grid.randomize();
    this.grid.render(this.drawer);
  }

  canvas_clicked(mouse_event) {
    console.log("canvas_clicked ", mouse_event);
    let x = mouse_event.clientX - this.canvas.getBoundingClientRect().left;
    let y = mouse_event.clientY - this.canvas.getBoundingClientRect().top;
    x = Math.floor(x);
    y = Math.floor(y);
    this.grid.addcell(x,y, this.drawer);
  }
  
}

export default Life;