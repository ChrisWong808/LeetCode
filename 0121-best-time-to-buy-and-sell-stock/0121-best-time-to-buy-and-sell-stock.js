/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    var maxProfit = 0;
    var minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update the minimum price if a lower price is found
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice); // Update the max profit if a higher profit is found
        }
    }
    
    return maxProfit;
};


// var maxProfit = function(prices) {
//     var max = 0
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             let diff = prices[j] - prices[i]
//             // console.log('j:', prices[j], 'i:', prices[i])
//             // console.log('diff:', diff)
//             if (diff > max) {
//                 //console.log('new max:', diff)
//                 max = diff
//                 }
//         }
//     }
//     return max
// };
// // console.log(maxProfit([7,6,4,3,1]))