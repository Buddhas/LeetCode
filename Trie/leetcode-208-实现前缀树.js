var Trie = function() {
  this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let nodes = this.children
  for (const ch of word) {
    if (!nodes[ch]) {
      nodes[ch] = {}
    }
    nodes = nodes[ch]
  }
  nodes.isEnd = true
};

Trie.prototype.searchPrefix = function(word) {
  let nodes = this.children
  for (const ch of word) {
    if (!nodes[ch]) return false
    nodes = nodes[ch]
  }
  return nodes
}
/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */