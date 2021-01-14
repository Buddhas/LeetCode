function Linked(value) {
  this.next = null
  this.value = value
}

// 第一种方式，比较字符串
function isPalindrome (head) {
  let temp = ''
  let receiveTemp = ''
  while(head) {
    const value = head.val
    temp += value
    receiveTemp = value + receiveTemp
    head = head.next
  }
  return temp === receiveTemp
}


// 递归比较
let point
function isPalindrome(head) {
  point = head
  return receiveLined(head)
}

function receiveLined(head) {
  if (!head) return true
  const res = receiveLined(head.next) && head.val == point.val
  point = point.next
  return res
}

// 测试案例

node1.next = node2
console.log(isPalindrome(node1))
