function Linked(value) {
  this.next = null
  this.value = value
}

function deleteNoe(node) {
  node.val = node.next.value
  node.next = node.next.next
}