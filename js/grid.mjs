
const gen_2d_array = function(n, m, filler = (i, j) => 0) {
  let arr = [];
  for (const i of Array(n).keys()) {
    let row = [];
    for (const j of Array(m).keys()) {
      row.push(filler(i, j));
    }
    arr.push(row);
  }
  return arr;
};

class Grid {
  constructor(width, height, cell_size) {
    this.size = {width: width, height: height};
    this.cells = gen_2d_array(height, width, (i, j) => Math.round(Math.random()));
    this.cell_size = cell_size;
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

  clear() {
    this.cells = gen_2d_array(this.size.height, this.size.width);
  }

  randomize() {
    this.cells = gen_2d_array(this.size.height, this.size.width, 
      (i, j) => Math.round(Math.random()));
  }

}
export default Grid;
