// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const values = {
        min: null,
        max: null,
        minTemp: null,
        diff: null,
    };

    let curr;
    let isCurrLowerThanMin;
    for (let i = 0; i < prices.length; i++) {
        curr = { value: prices[i], index: i };
        isCurrLowerThanMin = !values.min || curr.value < values.min.value;
        // Update min/max values
        if (isCurrLowerThanMin && (!values.max || curr.index < values.max.index)) {
            values.min = curr;
        } else if ((!values.max || curr.value > values.max.value) && curr.index > values.min.index) {
            values.max = curr;
        }

        // Super update
        if (values.minTemp && curr.value - values.minTemp.value > values.diff) {
            values.min = values.minTemp;
            values.max = curr;
            values.minTemp = null;
        } else if (isCurrLowerThanMin && (!values.minTemp || curr.value <= values.minTemp.value)) {
            values.minTemp = curr;
        }

        // update diff
        if (values.max && values.min) {
            values.diff = values.max.value - values.min.value;
        }
    }
    return values.diff || 0;
};

console.log(maxProfit([3, 10, 6, 6, 6, 6, 2, 8, 11])); //   R: 9
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //              R: 5
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2, 2])); //        R: 2
console.log(maxProfit([3, 3, 5, 0, 4])); //                 R: 4
console.log(maxProfit([3, 0, 1, 0, 4])); //                 R: 4
