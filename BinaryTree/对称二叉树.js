const isSymmetric = function (root) {
  if (!root) {
    // 若根节点为空，则返回true
    return true;
  }
  // 递归函数
  return isSameTree(root.left, root.right);
};

/**
 * 判断二叉树是否对称，直接去判断根节点的左子树和右子树是否相同
 * @param {TreeNode} root
 */
const isSameTree = (r, l) => {
  // 若左节点或右节点为空，则判断对应的右节点或左节点是否为空
  // 为空时，则返回true，不为空则返回false
  if (r === null) return l === null;
  if (l === null) return r === null;

  // 判断左节点的左节点和右节点的右节点是否相等
  // 不相等时，则该树不对称，相等时则继续递归判断
  if (r.val !== l.val) return false;

  return isSameTree(r.left, l.right) && isSameTree(r.right, l.left);
};