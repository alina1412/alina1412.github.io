
class Grid {
  constructor(width, height) {
    this.size = {width: width, height: height};
    this.cells = [];
    for (let i = 0; i < height; i += 1) {
        let row = new Array(width).fill(0);
        this.cells.push(row);
    }
  }

  render(drawer) {
    
    
  }

}
export default Grid;
