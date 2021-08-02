
// Rule 1:  B3/S23
let rulesG = [{B:[3], S:[2,3]}];
// B{number list}/S{number list} B3/S23

export class GameOfLife {
    constructor(board) {
        this.board = board;
        this.col_length = board.length;
        this.row_length = board[0].length;
        this.AliveToAlive = 1;
        this.AliveToDead = -1;
        this.DeadToAlive = 3;
        this.buf = [[-1, -1], [-1, 0],  [-1, 1],  [0, -1],  [0, 1],  [1, -1],  [1, 0],  [1, 1]];

    }
 
    check_neighbours(i,j) {            
        let count = 0;
        for (let direc of this.buf) {
            let x = direc[0] + i;
            let y = direc[1] + j;

            if ((0 <= x && x < this.col_length && 0 <= y && y < this.row_length) && 
               ((this.board[x][y] == this.AliveToAlive) || (this.board[x][y] == this.AliveToDead))) {
                    count += 1;    
            }
        }
        return count;
    }
    
    first_change_in_place(board) {
        this.board = board;
        for (let j = 0; j < this.row_length; j += 1) {
            for (let i = 0; i < this.col_length; i += 1) {
                let amount_neighbours = this.check_neighbours(i,j);
                if (this.board[i][j] == 1) {
                    if (rulesG[0]["S"].indexOf(amount_neighbours) >= 0) { // (amount_neighbours < 2 | amount_neighbours > 3)
                        this.board[i][j] = this.AliveToDead;
                    }
                    else {
                        this.board[i][j] = this.AliveToAlive;
                    }
                }
                else {
                    if (rulesG[0]["B"].indexOf(amount_neighbours) >= 0) {     // amount_neighbours == 3
                        this.board[i][j] = this.DeadToAlive;
                    }
                }
            }
        }
    }
         
    final_change() {
        for (let j = 0; j < this.row_length; j += 1) {
            for (let i = 0; i < this.col_length; i += 1) {
                if (this.board[i][j] > 0) {
                    this.board[i][j] = 1;
                }
                else {
                    this.board[i][j] = 0;
                }
            }
        }
    }
    
}




// Dummy for change back and forward
// let get_grid = function(newgrid) {
//     for (let i in newgrid) {
//         for (let j in newgrid[i]) {
//             newgrid[i][j] = !newgrid[i][j];
//         }
//     }
//     return newgrid;
// }



// export {lifegrid, get_grid, gameOfLife}; 

