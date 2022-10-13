var reverseList = function (head) {
  let newHeadNode = null
  let node = head
  const reverse = (head) => {
    if (!head || !head.next) {
      newHeadNode = head
      return head
    }
    reverse(head.next).next = head
    return head
  }
  reverse(head)
  if (node) {
    node.next = null
  }
  return newHeadNode
};