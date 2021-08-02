
export default class LifeRule {
    constructor(b_s_notation_string) {
        // b_s_notattion_string "B3/S23" B for "born", S for "survive"
        this.AliveToAlive = 1;
        this.AliveToDead = -1;
        this.DeadToAlive = 3;

        function get_notation(b_s_notattion_string) {
            function compartmentalize(x) {
                let y = x.split('').map(function(item) {
                return parseInt(item, 10);
                });
                return y;
            }
            let arr = b_s_notattion_string.split("/");
            let arr2 = [arr[0].substring(1), arr[1].substring(1)];
            let arr3 = [];
            for (let num of arr2) {
                arr3.push(compartmentalize(num));
            }

            let notation = {B: arr3[0], S: arr3[1]}
            return notation;


            // let ind = b_s_notattion_string.indexOf("/");
            // let first_nums = [];
            // let second_nums = [];
            // for (let i = 1; i < ind; i += 1) {
            //     first_nums.push(parseInt(b_s_notattion_string[i]));
            // }
            // for (let j = ind+2; j < b_s_notattion_string.length; j += 1) {
            //     second_nums.push(parseInt(b_s_notattion_string[j]));
            // }
            // let notation = {B: first_nums, S: second_nums};
            // console.log(notation);
            // return notation;
        }
        this.notation = get_notation(b_s_notation_string);
        
        console.log(this.notation);
        // console.log(this.notation["S"]);
    };

    develop(grid) {
        let col_length = grid.size.height;
        let row_length = grid.size.width;
        // console.log(this.notation["S"]);
        // let notatS = this.notation["S"]
        
        
        function check_neighbours(i,j, grid, col_length, row_length) {
            let buf = [[-1, -1], [-1, 0],  [-1, 1],  [0, -1],  [0, 1],  [1, -1],  [1, 0],  [1, 1]];
            let count = 0;
            for (let direc of buf) {
                let x = direc[0] + i;
                let y = direc[1] + j;
                if  (0 <= x && x < col_length && 0 <= y && y < row_length) {
                    console.log(grid.cells[x][y]);
                    if ((grid.cells[x][y] == this.AliveToAlive) || (grid.cells[x][y] == this.AliveToDead)) {
                        count += 1; 
                    }
                       
                }
            }
            return count;
        };

        function first_change_in_place(grid, col_length, row_length) {
            for (let j = 0; j < row_length; j += 1) {
                for (let i = 0; i < col_length; i += 1) {
                    let amount_neighbours = check_neighbours(i,j, grid, col_length, row_length);
                    if (grid.cells[i][j] == 1) {
                        if (this.notation["S"].indexOf(amount_neighbours) >= 0) { // (amount_neighbours < 2 | amount_neighbours > 3)
                            grid.cells[i][j] = this.AliveToDead;
                        }
                        else {
                            grid.cells[i][j] = this.AliveToAlive;
                        }
                    }
                    else {
                        if (this.notation["B"].indexOf(amount_neighbours) >= 0) {     // amount_neighbours == 3
                            grid.cells[i][j] = this.DeadToAlive;
                        }
                    }
                }
            }
        };
             
        function final_change(grid, col_length, row_length) {
            for (let j = 0; j < row_length; j += 1) {
                for (let i = 0; i < col_length; i += 1) {
                    if (grid.cells[i][j] > 0) {
                        grid.cells[i][j] = 1;
                    }
                    else {
                        grid.cells[i][j] = 0;
                    }
                }
            }
        };
        // first_change_in_place(grid, col_length, row_length);
        // final_change(grid, col_length, row_length);
    
        // for (let i = 0; i < grid.size.height; i += 1) {
        //     for (let j = 0; j < grid.size.width; j += 1) {
        //         grid.cells[i][j] = Math.round(Math.random());
        //     }
        // }

        console.log("LifeRule::develop");
    }
}

