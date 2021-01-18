function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  return constructNewNode(preorder, inorder, 0, preorder.length, 0, inorder.length);
}

function findInorderIndex (list, target) {
  if (list.length === 0) {
    return undefined;
  }

  let index;
  list.forEach((item, i) => {
    if (item === target) {
      index = i;
    }
  });
  return index;
}

function constructNewNode (preorder, inorder, preStart, preLength, inStart, inLength) {
  const root = preorder[preStart];
  const inOrderIndex = findInorderIndex(inorder, root);
  // 中序遍历根结点左边为左子树，右边为右子树
  const rootNode = new TreeNode(root);
  // 存在左子树
  if (inOrderIndex - inStart >= 1) {
    rootNode.left = constructNewNode(preorder, inorder, preStart + 1, preStart + (inOrderIndex - inStart), inStart, inOrderIndex - 1);
  }

  // 存在右子树
  if (inLength - inOrderIndex >= 1) {
    rootNode.right = constructNewNode(preorder, inorder, preStart + (inOrderIndex - inStart) + 1, preLength, inOrderIndex + 1, inLength);
  }
  return (root || root === 0) ? rootNode : null;
}