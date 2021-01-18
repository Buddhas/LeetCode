/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = []
    const traverNode = (root) => {
      if (!root) {
        result.push(null)
        return
      } 
      result.push(root.val)
      traverNode(root.left)
      traverNode(root.right)
    }
    traverNode(root)
    return result
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const length = data.length

    const i = 0

    const strcuture = () => {
      if (i >= length) {
        return null
      }
      
      const val = data[i]
      i++
      if (val === null) {
        return null
      }

      const node = new TreeNode(val)

      node.left = strcuture()
      node.right = strcuture()

      return node

    }

    return strcuture()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */