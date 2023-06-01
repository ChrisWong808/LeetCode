/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // Create a set to quickly check if a word is in the wordList
  const wordSet = new Set(wordList);

  // If endWord is not in wordList, no transformation sequence is possible
  if (!wordSet.has(endWord)) {
    return 0;
  }

  // Create a queue for BFS and enqueue the beginWord with a level of 1
  const queue = [];
  queue.push({ word: beginWord, level: 1 });

  // Perform BFS
  while (queue.length > 0) {
    const { word, level } = queue.shift();

    // Check if we have reached the endWord
    if (word === endWord) {
      return level;
    }

    // Try all possible transformations of the current word
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);

        // If the new word is in the wordSet, enqueue it with the next level
        if (wordSet.has(newWord)) {
          queue.push({ word: newWord, level: level + 1 });

          // Remove the word from the wordSet to avoid duplicates
          wordSet.delete(newWord);
        }
      }
    }
  }

  // No transformation sequence is possible
  return 0;
};