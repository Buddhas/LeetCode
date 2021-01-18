function ListNode(val) {
  this.next = null
  this.val = val
}

var addTwoNumbers = function(l1, l2) {
  const zero = new ListNode(0)
  let current = zero

  let k = 0 // 进位
  while(l1 || l2) {
    let i = l1 ? l1.val : 0
    let j = l2 ? l2.val : 0

    let sum = i + j + k

    current.next = new ListNode(sum % 10)

    k = Math.floor(sum / 10)

    current = current.next

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }

  }

  if (k > 0) {
    current.next = new ListNode(k)
  }

  return zero.next
};