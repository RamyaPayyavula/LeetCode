/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    // north = 0, east = 1, south = 2, west = 3
    directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let x = y = 0;
    let idx = 0;
    for (let i = 0; i < instructions.length; i++){
        if (instructions[i] === 'L')
            idx = (idx + 3) % 4;
        else if (instructions[i] === 'R')
            idx = (idx + 1) % 4;
        else {
            x += directions[idx][0];
            y += directions[idx][1];
        }
    }
    return (x == 0 && y == 0) || idx !== 0;
};

console.log(isRobotBounded("GGLLGG"));
console.log(isRobotBounded("GG"));