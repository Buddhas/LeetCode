const levelOrder = function (root) {
  if (!root) {
    return []
  }
  const result = []
  tempLevelOrder(root, result, 0)
}

const tempLevelOrder = function (root, result, deep) {
  if (!root) return
  if (!result[deep]) {
    result[deep] = [root.val]
  } else {
    result[deep].push(root.val)
  }
  deep += 1
  tempLevelOrder(root.left, result, deep)
  tempLevelOrder(root.right, result, deep)
}