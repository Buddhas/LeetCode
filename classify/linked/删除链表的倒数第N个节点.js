function Linked(value) {
  this.next = null
  this.value = value
}


var removeNthFromEnd = function(head, n) {
  let fast = head
  let slow = head
  let pre = slow

  while(n > 0) {
    fast = fast.next
    n--
  }
  if (!first) return head.next;
  while(fast) {
    pre = slow
    fast = fast.next
    slow = slow.next
  }
  pre.next = slow.next
  return head
};

