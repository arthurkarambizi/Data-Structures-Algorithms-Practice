/*
** Source : https://leetcode.com/problems/robot-return-to-origin/
** Date   : 10-16-2019
*/

/*
** There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
**
** The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
**
** Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
**
**
**
** Example 1:
**
** Input: moves = "UD"
** Output: true
** Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
** Example 2:
**
** Input: moves = "LL"
** Output: false
** Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
** Example 3:
**
** Input: moves = "RRDD"
** Output: false
** Example 4:
**
** Input: moves = "LDRRLRUULR"
** Output: false
**
**
** Constraints:
**
** 1 <= moves.length <= 2 * 104
** moves only contains the characters 'U', 'D', 'L' and 'R'
*/

/**
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function(moves) {
    let movesArray = moves.split('');
    let yAxis = [];
    let xAxis = [];
    for (let index = 0; index < movesArray.length; index++) {
        const move = movesArray[index];
        if (move === 'U' || move === 'D') {
            move === 'U' ? yAxis.push(1) : yAxis.push(-1);
        }

        if (move === 'R' || move === 'L') {
            move === 'R' ? xAxis.push(1) : xAxis.push(-1);
        }
    }

    let yAxisTotal = yAxis.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    let xAxisTotal = xAxis.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return yAxisTotal === 0 && xAxisTotal === 0 ? true : false;
};

let moves = 'UDDULR';
judgeCircle(moves);

//--------------------------------------------------------------------------------
//other solution

var judgeCircle = function(moves) {
    let position = { x: 0, y: 0 };

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R' || moves[i] === 'L') {
            //RL
            moves[i] === 'R' ? position.x++ : position.x--;
        } else if (moves[i] === 'U' || moves[i] === 'D') {
            //UD
            moves[i] === 'U' ? position.y++ : position.y--;
        }
    }

    return position.x === 0 && position.y === 0;
};
