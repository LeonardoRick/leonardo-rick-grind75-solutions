/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    const values = {
        min: null,
        max: null,
        minTemp: null,
        diff: null,
    };

    let minChanged = false;
    let maxChanged = false;
    let curr = null;
    for (let i = 0; i < prices.length; i++) {
        minChanged = false;
        maxChanged = false;
        curr = { value: prices[i], index: i };
        // Update min/max values
        if (
            (!values.min || curr.value < values.min.value) &&
            (!values.max || curr.index < values.max.index)
        ) {
            minChanged = true;
            values.min = curr;
        }

        if (!minChanged && (!values.max || curr.value > values.max.value) && curr.index > values.min.index) {
            maxChanged = true;
            values.max = curr;
            i--;
        }

        // Super update
        if (!minChanged && !maxChanged) {
            if (values.minTemp && curr.value - values.minTemp.value > values.diff) {
                values.min = values.minTemp;
                values.max = curr;
                values.minTemp = null;
            } else if (
                (!values.min || curr.value < values.min.value) &&
                (!values.minTemp || curr.value <= values.minTemp.value)
            ) {
                values.minTemp = curr;
            }
        }

        // update diff
        if (values.max && values.min) {
            values.diff = values.max.value - values.min.value;
        }
        // console.log('value =', curr.value, 'i =', i, '\nvalues:', values);
    }
    return values.diff && values.diff > 0 ? values.diff : 0;
};

console.log(maxProfit([3, 10, 6, 6, 6, 6, 2, 8, 11])); //   R: 9
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //              R: 5
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2, 2])); //        R: 2
console.log(maxProfit([3, 3, 5, 0, 4])); //                 R: 4
console.log(maxProfit([3, 0, 1, 0, 4])); //                 R: 4
