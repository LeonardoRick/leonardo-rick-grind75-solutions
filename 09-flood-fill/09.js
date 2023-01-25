// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr row
 * @param {number} sc column
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, ignoreM = [[]]) {
    const initial = image[sr] && image[sr][sc] !== undefined ? image[sr][sc] : undefined;
    if (ignoreM[sr] === undefined) {
        ignoreM[sr] = [];
    }
    const ignore = ignoreM[sr][sc] === 1;
    ignoreM[sr][sc] = 1;

    if (!ignore) {
        if (image[sr] !== undefined && image[sr][sc - 1] === initial) {
            image = floodFill(image, sr, sc - 1, color, ignoreM);
        }

        if (image[sr] !== undefined && image[sr][sc + 1] === initial) {
            image = floodFill(image, sr, sc + 1, color, ignoreM);
        }

        if (image[sr - 1] !== undefined && image[sr - 1][sc] === initial) {
            image = floodFill(image, sr - 1, sc, color, ignoreM);
        }

        if (image[sr + 1] !== undefined && image[sr + 1][sc] === initial) {
            image = floodFill(image, sr + 1, sc, color, ignoreM);
        }
    }
    image[sr][sc] = color;
    return image;
};

console.log(
    floodFill(
        [
            [0, 1, 0],
            [0, 0, 0],
        ],
        0,
        0,
        0
    )
);

// console.log(
//     floodFill(
//         [
//             [0, 0, 0],
//             [0, 0, 1],
//         ],
//         0,
//         0,
//         2
//     )
// );
// console.log(
//     floodFill(
//         [
//             [1, 1, 1],
//             [1, 1, 0],
//             [1, 0, 1],
//         ],
//         1,
//         1,
//         2
//     )
// );

// console.log(
//     floodFill(
//         [
//             [0, 0, 0],
//             [0, 0, 0],
//         ],
//         0,
//         0,
//         0
//     )
// );
