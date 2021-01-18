
// 深度优先遍历
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


// 广度优先遍历
var serialize = function(root) {
  if (!root) return []
  const queue = []
  const data = []
  queue.push(root)

  while(queue.length) {
    const node = queue.shift()
    data.push(node.val ? node.val : null)

    if (node) {
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return data
};


var deserialize = function(data) {

  if (data.length == 0) {
    return null
  }

  const queue = []
  const root = new TreeNode(data.shift())
  queue.push(root)

  while(queue.length) {
    // 左边
    let val = data.shift()
    const node = queue.shift()
    if (val == null) {
      node.left = null
    } else {
      const leftNode = new TreeNode(val)
      node.left = leftNode
      queue.push(leftNode)
    }

    // 右边
    val = data.shift()
    if (val == null) {
      node.right = null
    } else {
      const rightNode = new TreeNode(val)
      node.right = rightNode
      queue.push(rightNode)
    }
  }

  return root
};