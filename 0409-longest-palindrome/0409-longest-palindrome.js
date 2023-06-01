/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var counter = {};
    for (let i = 0; i < s.length; i++) {
        if (counter[s[i]] === undefined) {
            counter[s[i]] = 1
            } else {
            counter[s[i]] += 1
        }
    }
    var longest = 0
    var hasOdd = false;
    for (key in counter) {
        if (counter[key]%2 === 0) {
            longest += counter[key]
            }
        else if (counter[key]%2 === 1) {
            longest += counter[key] - 1
            hasOdd = true
                 }
    }
    if (hasOdd) {
        longest += 1
        }
    return longest
};