function ListNode(val) {
  this.next = null
  this.val = val
}

function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let pA = headA
  let pB = headB
  let len1 = 0
  let len2 = 0
  while(pA) {
    len1++
    pA = pA.next
  }

  while(pB) {
    len2++
    pB = pB.next
  }
}