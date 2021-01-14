function Linked(value) {
  this.next = null
  this.value = value
}

// 方式一，比较low
let newHead
function receive(head) {
  if (head == null || head.next == null) {
    newHead = head
    return head
  }
  let hNext = receive(head.next)
  hNext.next = head
  return head
}

function reverseList(head) {
  if (head == null || head.next == null) {
    newHead = head
    return head
  }
  let node = head
  receive(head)
  node.next = null
  return newHead
}


// 方式二
function reverseList(head) {
  if (head == null || head.next == null) {
    return head
  }
  const res = reverseList(head.next)
  head.next.next = head
  head.next = null
  return res
}



let node1 = new Linked(1)
let node2 = new Linked(2)
let node3 = new Linked(3)

node1.next = node2
node2.next = node3

reverseList(node1)
