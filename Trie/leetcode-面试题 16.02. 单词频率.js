
// WordsFrequency wordsFrequency = new WordsFrequency({"i", "have", "an", "apple", "he", "have", "a", "pen"});
// wordsFrequency.get("you"); //返回0，"you"没有出现过
// wordsFrequency.get("have"); //返回2，"have"出现2次
// wordsFrequency.get("an"); //返回1
// wordsFrequency.get("apple"); //返回1
// wordsFrequency.get("pen"); //返回1

/**
 * @param {string[]} book
 */

// hash 解法
var WordsFrequency = function(book) {
  this.map = new Map()
  for (const item of book) {
    if (this.map.has(item)) {
      this.map.set(item, this.map.get(item) + 1)
    } else {
      this.map.set(item, 1)
    }
  }
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
  return this.map.has(word) ? this.map.get(word) : 0
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */


// 字典树解法
function getTireChildren() {
  this.children = {}
  this.number = 0
}

function Tire() {
  this.chil = new getTireChildren()
};

Tire.prototype.insert = function(word) {
  let nodes = this.chil
  for(const ch of word) {
    if (!nodes.children[ch]) {
      nodes.children[ch] = new getTireChildren()
    }
    nodes = nodes.children[ch]
  }
  nodes.number++
}

Tire.prototype.get = function(word) {
  let nodes = this.chil
  for (const ch of word) {
    if (!nodes.children[ch]) {
      return 0
    }
    nodes = nodes.children[ch]
  }
  return nodes.number
}

function WordsFrequency(book) {
  this.tire = new Tire()
  for(let i of book) {
    this.tire.insert(i)
  }
}
WordsFrequency.prototype.get = function(word) {
  // console.log(this.tire)
  return this.tire.get(word)
}
let wordsFrequency = new WordsFrequency([[["i","have","an","apple","he","have","a","pen"]],["you"],["have"],["an"],["apple"],["pen"]]);
// console.log(WordsFrequency)
console.log(wordsFrequency.get('have'))