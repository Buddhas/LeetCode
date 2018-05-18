function ListNode(val){
    this.val = val
    this.next = null
}

var ListNode1 = new ListNode(2)
var ListNode2 = new ListNode(3)
ListNode1.next = ListNode2
var ListNode3 = new ListNode(5)
ListNode2.next = ListNode3
var ListNode4 = new ListNode(9)
ListNode3.next = ListNode4
var ListNode5 = new ListNode(9)
ListNode4.next = ListNode5

var ListNode6 = new ListNode(3)
var ListNode7 = new ListNode(7)
ListNode6.next = ListNode7
var ListNode8 = new ListNode(9)
ListNode7.next = ListNode8


var addTwoNumbers = function(l1, l2) {
    var str = ''
    var j = 0
    while(l1 != null || l2 !=null){
        
        if(l1 === null){
            l1 = new ListNode(0)

        }
        if(l2 === null){
            l2 = new ListNode(0)
            
        }
        if(l1.val + l2.val + j < 10){
            str = str + (l1.val + l2.val + j)
        }else{
            str = str + ((l1.val + l2.val + j) + '')[1]
        }
        if(l1.val + l2.val + j >= 10){
            j = 1
        }else{
            j = 0
        }
        l1 = l1.next
        l2 = l2.next
    }
    if(j === 1){
        str = str + 1
    }
    for(var i = 0; i < str.length; i++){
        var node = new ListNode(parseInt(str3[i]))
        
        if(i === 0){
            previousNode = node
            head = node
            continue
        }else{
            previousNode.next = node
            previousNode = node
        }
    }
    return head
}
//addTwoNumbers(ListNode1,ListNode4)
console.log(addTwoNumbers(ListNode1,ListNode6))
//console.log(addTwoNumbers(ListNode1,ListNode4).next.val)
//console.log(addTwoNumbers(ListNode1,ListNode4).next.next.val)
