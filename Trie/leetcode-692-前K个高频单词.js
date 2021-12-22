/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = new Map()
  for (const item of words) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }
  console.log(map)
  const result = []
  for(let key of map) {
    if (key[1] <= k) {
      result.push(key[0])
    }
  }
  return result.sort()
};

var topKFrequent = function (words, k) {
  const map = {};
  words.forEach(v => map[v] = (map[v] || 0) + 1);
  const keys = Object.keys(map).sort((a, b) => map[b] - map[a] || a.localeCompare(b))
  return keys.slice(0, k);
};


console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], k = 2))
