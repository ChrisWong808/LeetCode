/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var container = {}
    //fill up container
    for (let i = 0; i < magazine.length; i++) {
        if (container[magazine[i]] === undefined) {
            container[magazine[i]] = 1
            }
        else {
            container[magazine[i]] += 1
        }
    }
    //check contain has enough
    for (let j = 0; j < ransomNote.length; j++) {
        if (container[ransomNote[j]] > 0) {
            container[ransomNote[j]] -= 1
            }
        else {
            return false
        }
    }
    return true
};