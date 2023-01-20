// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// more simpler solution improoving this one: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2433981/easy-100-kadane-s-algorithm-java-c-python-js-python3-min-so-far/?languageTags=javascript
const maxProfit = function (prices) {
    if (prices == null || prices.length <= 1) return 0;
    let minBuy = prices[0];
    let profit = 0;
    let newMinBuy;
    for (let i = 1; i < prices.length; i++) {
        newMinBuy = Math.min(minBuy, prices[i]);
        if (minBuy === newMinBuy) {
            profit = Math.max(profit, prices[i] - minBuy);
        } else {
            minBuy = newMinBuy;
        }
    }
    return profit;
};
// console.log(maxProfit([3, 10, 6, 6, 6, 6, 2, 8, 11])); //   R: 9
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); //              R: 5
// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2, 2])); //        R: 2
// console.log(maxProfit([3, 3, 5, 0, 4])); //                 R: 4
// console.log(maxProfit([3, 0, 1, 0, 4])); //                 R: 4

console.log(maxProfit([3, 3, 10, 0, 3]));
