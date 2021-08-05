
export default class LifeRule {
    static AliveToAlive = 1;
    static AliveToDead = -1;
    static DeadToAlive = 3;
    static notation = null;
    constructor(b_s_notation_string) {
        // b_s_notattion_string "B3/S23" B for "born", S for "survive"

        function get_notation(b_s_notattion_string) {
            function compartmentalize(x) {
                let y = x.split('').map(function(item) {
                    return parseInt(item, 10);
                });
                return y;
            }
            let [born, survive] = b_s_notattion_string
                        .split("/")
                        .map((word) => word.substring(1))
                        .map(compartmentalize);
            let notation = {B: born, S: survive}
            return notation;
        }

        LifeRule.notation = get_notation(b_s_notation_string);
        // console.log(LifeRule.notation);
    };

    static check_neighbours(i,j, grid) {
        let buf = [[-1, -1],  [-1, 0],  [-1, 1],  
                   [ 0, -1],/*[ 0, 0] */[ 0, 1],  
                   [ 1, -1],  [ 1, 0],  [ 1, 1]];
        let count = 0;
        for (let direc of buf) {
            let x = direc[0] + i;
            let y = direc[1] + j;
            if  (0 <= x && x < grid.size.height 
                 && 
                 0 <= y && y < grid.size.width) {
                // console.log(grid.cells[x][y]);
                if (grid.cells[x][y] == LifeRule.AliveToAlive
                     || 
                    grid.cells[x][y] == LifeRule.AliveToDead) 
                {
                    count += 1; 
                }
            }
        }
        return count;
    };

    static first_change_in_place(grid) {
        for (let j = 0; j < grid.size.width; j += 1) {
            for (let i = 0; i < grid.size.height; i += 1) {
                let amount_neighbours = LifeRule.check_neighbours(i,j, grid);
                if (grid.cells[i][j] == 1) {
                    if (LifeRule.notation["S"].indexOf(amount_neighbours) < 0) { 
                        grid.cells[i][j] = LifeRule.AliveToDead;
                    }
                    else {
                        grid.cells[i][j] = LifeRule.AliveToAlive;
                    }
                }
                else {
                    if (LifeRule.notation["B"].indexOf(amount_neighbours) >= 0) {     
                        grid.cells[i][j] = LifeRule.DeadToAlive;
                    }
                }
            }
        }
    };
         
    static final_change(grid) {
        for (let j = 0; j < grid.size.width; j += 1) {
            for (let i = 0; i < grid.size.height; i += 1) {
                if (grid.cells[i][j] > 0) {
                    grid.cells[i][j] = 1;
                }
                else {
                    grid.cells[i][j] = 0;
                }
            }
        }
    };

    develop(grid) {
        LifeRule.first_change_in_place(grid);
        LifeRule.final_change(grid);
        console.log("LifeRule::develop");
    }
}

