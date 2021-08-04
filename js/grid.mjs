
class Grid {
  constructor(width, height, cell_size) {
    this.size = {width: width, height: height};
    this.cells = [];
    this.cell_size = cell_size;
    for (let i = 0; i < height; i += 1) {
        // let row = new Array(width).fill(0);
        let row = new Array(width).fill(Math.round(Math.random()));
        this.cells.push(row);
    }
  }

  get_cell_coordinates(row_num, col_num) {
    //   let position = {x: 0, y: 0};
    //   position.x = col_num * this.cell_size;
    //   position.y = row_num * this.cell_size;
      return [col_num * this.cell_size,
        row_num * this.cell_size];
  }

  render(drawer) {
    let cs = this.cell_size

    for (let i = 0; i < this.size.height; i += 1) {
        for (let j = 0; j < this.size.width; j += 1) {
            let position = this.get_cell_coordinates(i, j);
            let fillColor = "#ccc";
            if (this.cells[i][j] == 1) {
                fillColor = "#e30";
            }
            drawer.draw_square(position, cs, fillColor);
        }
    }

    // drawer.draw_square([10,100], cs, "#ccc");
    // drawer.draw_square([10 + cs,100], cs, "#e30");
  }

}
export default Grid;
