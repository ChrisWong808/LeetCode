var isAnagram = function(s, t) {
  // Check if the lengths of the strings are different
  if (s.length !== t.length) {
    return false;
  }

  // Sort the strings and compare them
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
};
