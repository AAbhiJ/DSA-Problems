/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * TC : O(N^2)
 * SC : O(N)
 * 
 */

var isValidGrid = function (board, position) {
    let isPres = new Array(10).fill(false);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const row = position[0] + i;
            const col = position[1] + j;
            const curNum = board[row][col];
            if (isNaN(board[row][col])) continue;

            // console.log(row, col, board[row][col], curNum, isPres[curNum]);
            if (isPres[curNum]) return false;
            isPres[curNum] = true;
        }
    }
    return true;
}

var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        let isPres = new Array(11).fill(false);
        for (let j = 0; j < board.length; j++) {
            if (board[i][j]==='.') continue;
            if (isPres[board[i][j]]) return false;
            isPres[board[i][j]] = true;
        }

        isPres = new Array(10).fill(false);
        for (let j = 0; j < board.length; j++) {
            if (board[j][i]==='.') continue;
            if (isPres[board[j][i]]) return false;
            isPres[board[j][i]] = true;
        }
    }

    const startingPositions = [[0, 0], [0, 3], [0, 6],
    [3, 0], [3, 3], [3, 6],
    [6, 0], [6, 3], [6, 6]]

    for (let i = 0; i < startingPositions.length; i++) {
        curPos = startingPositions[i];
        if (!isValidGrid(board, curPos)) return false;
    }

    return true;
};