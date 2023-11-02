/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Time Complexity : O(N*M)
 * Space Complexity : O(1) // Not considered returned result array
 */
var spiralOrder = function(matrix) {
    let N = matrix.length, M = matrix[0].length;
    let up = 0, down = N-1, left = 0, right = M-1;
    let direction = 'c', rIncVal = -1, cIncVal = 1;
    let row = 0, col = 0, res = [];
    while(up <= down && left <= right){
        res.push(matrix[row][col]);
        let new_row = row + (direction == 'r' ? rIncVal : 0);
        let new_col = col + (direction == 'c' ? cIncVal : 0);
        // console.log(new_row, new_col, row, col, up, down, left, right)
        if(new_row < up || new_row > down){
            //row = row + (rIncVal * -1);
            direction = 'c';
            cIncVal *= -1;
            col = col + cIncVal;
            left =  left + (new_row < up ? 1 : 0);
            right = right + (new_row > down ? -1 : 0);
        }
        else if(new_col < left || new_col > right){
            //col = col + (cIncVal * -1);
            direction = 'r';
            rIncVal *= -1;
            row = row + rIncVal;
            up = up + (new_col > right ? 1 : 0);
            down = down + (new_col < left ? -1 : 0);

        }else{
            row = new_row;
            col = new_col;
        }
    }
    return res;
    
};