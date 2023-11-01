/**
 * @param {number[][]} mat
 * @return {number[]}
 * Time Complxity : O(N*M)
 * Space Complxity : O(1)
 */
var findDiagonalOrder = function (matrix) {
    let N = matrix.length, M = matrix[0].length;
    let row = 0, col = 0;
    let direction = 1;
    let result = [];
    while (row < N && col < M) {

        result.push(matrix[row][col]);
        let new_row = row + (direction == 1 ? -1 : 1);
        let new_col = col + (direction == 1 ? 1 : -1);

        if (new_row < 0 || new_row == N || new_col < 0 || new_col == M) {
            if (direction == 1) {
                row += (col == M - 1 ? 1 : 0);
                col += (col < M - 1 ? 1 : 0);
            } else {
                col += (row == N - 1 ? 1 : 0);
                row += (row < N - 1 ? 1 : 0);
            }
            direction = 1 - direction;
        }else{
            row = new_row;
            col = new_col;
        }
    }
    return result;
};