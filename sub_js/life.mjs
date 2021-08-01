
let get_grid = function(newgrid) {
    for (let i in newgrid) {
        for (let j in newgrid[i]) {
            newgrid[i][j] = !newgrid[i][j];
        }
    }
    return newgrid;
}


let gameOfLife = function(board) {
    let m = board.length;
    let n = board[0].length;
    
    // DeadToDead = 0
    let AliveToAlive = 1;
    let AliveToDead = -1;
    let DeadToAlive = 3;
    
    function check_around(i,j, board, m, n) {
        let buf = [[-1, -1], [-1, 0],  [-1, 1],  [0, -1],  [0, 1],  [1, -1],  [1, 0],  [1, 1]];
        let count = 0;
        let x = 0;
        let y = 0;
        for (let direc of buf) {
            x = direc[0] + i;
            y = direc[1] + j;
            
            if (0 <= x && x < m && 0 <= y && y < n) {
                if ((board[x][y] == AliveToAlive) | (board[x][y] == AliveToDead)) {
                    count += 1;
                }
            }
        }
        return count;
    }

    
    for (let j in [...Array(n).keys()]) {
        for (let i in [...Array(m).keys()]) {
            let x = parseInt(i)
            let y = parseInt(j)
            let res = check_around(x,y, board, m, n)
            if (board[x][y] == 1) {
                if (res < 2 | res > 3) {
                    board[x][y] = AliveToDead;
                }
                else {
                    board[x][y] = AliveToAlive;
                }
            }
            else {
                if (res == 3) {
                    board[x][y] = DeadToAlive;
                }
            }
        }
        
    }
     
    for (let j in [...Array(n).keys()]) {
        for (let i in [...Array(m).keys()]) {
            let x = parseInt(i)
            let y = parseInt(j)
            if (board[x][y] > 0) {
                board[x][y] = 1;
            }
            else {
                board[x][y] = 0;
            }
        }
    }
    return board;
};





const lifegrid = 0
// const lifegrid = {
    
//     newgrid: get_grid([1,2,3,4]),

//     bb: {
//         some_name: 0,
//         name2: "name"
//     },
// };


export {lifegrid, get_grid, gameOfLife}; 

