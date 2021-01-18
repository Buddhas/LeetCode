const maxDepth = (root) => {
  if (!root) {
    return 1
  }
  const left = maxDepth(root.left) + 1
  const right = maxDepth(root.right) + 1
  return Math.max(left, right)
}