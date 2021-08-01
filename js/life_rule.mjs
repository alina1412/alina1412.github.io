
export default class LifeRule {
    constructor(b_s_notattion_string) {
        // "B3/S23" B for "born", S for "survive"

        
    }
    develop(grid) {

        for (let i = 0; i < grid.size.height; i += 1) {
            for (let j = 0; j < grid.size.width; j += 1) {
                grid.cells[i][j] = Math.round(Math.random());
            }
        }

        console.log("LifeRule::develop");
    }
}

