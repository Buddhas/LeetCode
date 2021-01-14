
function Linked(value) {
  this.next = null
  this.value = value
}

// 双指针
var hasCycle = function(head) {
  let fastNode = head
  let slowNode = head
  while(fastNode && fastNode.next) {
    fastNode = fastNode.next.next
    slowNode = slowNode.next
    if (fastNode === slowNode) return true
  }
  return false
};


// 