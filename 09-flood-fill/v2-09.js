// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const currentColor = image[sr][sc],
        m = image[0].length - 1,
        n = image.length - 1;
    if (currentColor == color) {
        return image;
    }

    function coloring(x, y) {
        if (x < 0 || y < 0 || x > n || y > m || image[x][y] != currentColor) return image;

        image[x][y] = color;
        coloring(x + 1, y);
        coloring(x, y + 1);
        coloring(x, y - 1);
        coloring(x - 1, y);
        return image;
    }
    coloring(sr, sc);

    return image;
};
console.log(
    floodFill(
        [
            [0, 0, 0],
            [0, 0, 1],
        ],
        0,
        0,
        2
    )
);
