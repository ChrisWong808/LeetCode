function findAnagrams(s, p) {
  const result = [];
  const sMap = new Array(26).fill(0); // Assuming lowercase English letters
  const pMap = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pMap[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  let start = 0;
  let end = 0;

  while (end < s.length) {
    sMap[s.charCodeAt(end) - 'a'.charCodeAt(0)]++;
    end++;

    if (end - start === p.length) {
      if (arraysAreEqual(sMap, pMap)) {
        result.push(start);
      }
      sMap[s.charCodeAt(start) - 'a'.charCodeAt(0)]--;
      start++;
    }
  }

  return result;
}

function arraysAreEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
