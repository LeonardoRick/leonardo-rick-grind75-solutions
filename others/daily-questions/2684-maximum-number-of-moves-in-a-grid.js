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


// ?
// ?  ChatPGT explanation on how to find the best solution
// ?

// For this problem, the key to solving it lies in finding the longest path that meets the rules without exhaustively trying every possible route. Let’s break it down step by step and go over the logic to develop a solution:

// 	1.	Grid Navigation Rules:
// -	•	You start in any cell in the first column (column 0) and can move only to the right, with three possible directions:
// -	•	Right-up (row - 1, col + 1)
// -	•	Right (row, col + 1)
// -	•	Right-down (row + 1, col + 1)
// =	•	Each move must go to a cell with a value strictly greater than the current cell’s value.
// 	2.	Goal:
// -	•	The goal is to find the maximum number of moves (steps) you can take, starting from any cell in the first column, by following the grid navigation rules.
// 	3.	Dynamic Programming (DP) Approach:
// -	•	To avoid recalculating paths from scratch multiple times, a dynamic programming solution is ideal.
// -	•	Define a DP table (or memoization table) dp[row][col], where each entry will store the maximum number of moves starting from grid[row][col].
// -	•	This means that instead of exploring all paths at once, we calculate and store the longest path from each cell once, then use this information as we proceed through the grid.
// 	4.	Bottom-up DP Solution (Reverse Calculation):
// -	•	Since we know our moves go only to the right, we can build our solution from the last column back to the first column.
// -	•	Starting from the last column, set each dp[row][last_col] = 0 because there are no moves possible when starting from any cell in the last column.
// -	•	For each column before the last, calculate the maximum possible moves from each cell (row, col) by considering the three valid moves:
// -	•	Right-up, Right, and Right-down.
// -	•	If any of these moves satisfy the condition (i.e., grid[row][col] < grid[new_row][new_col]), then set dp[row][col] to 1 + dp[new_row][new_col], where dp[new_row][new_col] is the maximum moves from the destination cell.
// -	•	The value of dp[row][col] will then represent the maximum moves possible starting from grid[row][col].
// 	5.	Final Answer:
// -	•	The maximum moves will be the highest value of dp[row][0] across all rows in the first column. This represents the maximum moves starting from the first column and reaching as far as possible to the right under the movement constraints.
// 	6.	Complexity:
// -	•	Each cell is visited once, and for each cell, we evaluate up to three possible moves (right-up, right, and right-down).
// -	•	With m rows and n columns, this approach has a time complexity of O(m * n), which is efficient given the constraints.

// By following this approach, you can keep track of paths efficiently without needing to know every possible future path right from the start! The DP table essentially “remembers” the best possible moves, building up an optimal solution from the ground up.

// This approach keeps computations local, allowing each cell to “see” its best path options based on previously computed moves, which avoids redundant calculations and makes the solution efficient.
