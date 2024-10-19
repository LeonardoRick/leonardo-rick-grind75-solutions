/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    let toUseLadders = [];
    let bricksCopy = bricks;
    for (let j = 0; j < heights.length - 1; j++) {
        const curr = heights[j];
        const next = heights[j + 1];

        if (curr < next) {
            const min = Math.min(...toUseLadders);
            const diff = next - curr;
            if (toUseLadders.length < ladders) {
                toUseLadders.push(diff);
                continue;
            }

            if (min < diff) {
                bricksCopy -= min;
                if (bricksCopy < 0) {
                    break;
                }

                toUseLadders.splice(
                    toUseLadders.findIndex((value) => value === min),
                    1,
                    diff
                );
            } else {
                bricksCopy -= diff;
            }

            if (bricksCopy <= 0) {
                break;
            }
        }
    }

    let i = 0;
    for (i; i < heights.length - 1; i++) {
        const curr = heights[i];
        const next = heights[i + 1];
        if (curr < next) {
            const diff = next - curr;
            if (toUseLadders.includes(diff) && ladders > 0) {
                ladders--;
                toUseLadders.splice(
                    toUseLadders.findIndex((value) => value === diff),
                    1
                );
                continue;
            }
            if (bricks >= diff) {
                bricks -= diff;
                continue;
            }
            break;
        }
    }
    return i;
};

console.log(furthestBuilding([1, 2, 4, 7], 3, 1));
