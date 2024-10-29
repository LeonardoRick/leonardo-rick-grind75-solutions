/*
 * @lc app=leetcode id=2684 lang=javascript
 *
 * [2684] Maximum Number of Moves in a Grid
 * https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  let moves = 0;
  const valid = [[]];

  function fillValidityNextStep(value, i, j) {
    // index that deosn't exist just don't populate
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1) return false;


    if (!valid[i]) {
      valid[i] = [];
    }

    if (!valid[i][j]) {
      valid[i][j] = false;
    }

    if (value < grid[i][j]) {
        valid[i][j] = true;
      return true;
    }
    return false;
  }
  function isValid(i, j) {
    return j === 0 || !!(valid[i] && valid[i][j]);
  }

  for (let col = 0; col < grid[0].length; col++) {
    let canWalk = false;
    for (let row = 0; row < grid.length; row++) {
      const cell = grid[row][col];
      if (isValid(row, col)) {
          const isValidP1 = fillValidityNextStep(cell, row - 1, col + 1);
          const isValidP2 = fillValidityNextStep(cell, row, col + 1);
          const isValidP3 = fillValidityNextStep(cell, row + 1, col + 1);
          if (isValidP1 || isValidP2 || isValidP3) {
            if (!canWalk) {
              canWalk = true;
              moves++;
            }
          }
      }
    }
    if (!canWalk) {
      break;
    }
  }
  return moves;
};

// @lc code=end

// ? This is a great example of how we can search things in a matrix.
// ? Basically we create a copy of the matrix where each index stores the value
// ? Informing if it's cell is a valid reachable point. From there we calculate
// ? If there's other reachable points and at the end we pick the last best cell

// console.log(maxMoves([[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]])); // 3

// console.log(
//   maxMoves([
//     [3, 2, 4],
//     [2, 1, 9],
//     [1, 1, 7],
//   ])
// ); // 0

// console.log(
//   maxMoves([
//     [ 1000000, 92910, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068 ],
//     [ 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118],
//   ])
// ); // 49


// console.log(
//     maxMoves([
//         [187,167,209,251,152,236,263,128,135],
//         [267,249,251,285,73,204,70,207,74],
//         [189,159,235,66,84,89,153,111,189],
//         [120,81,210,7,2,231,92,128,218],
//         [193,131,244,293,284,175,226,205,245]]
//     )
// ); // 3
