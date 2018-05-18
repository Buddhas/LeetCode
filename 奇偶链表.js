function ListNode(val){
    this.val = val
    this.next = null
}
var ListNode1 = new ListNode(1)
var ListNode2 = new ListNode(2)
ListNode1.next = ListNode2
var ListNode3 = new ListNode(3)
ListNode2.next = ListNode3
var ListNode4 = new ListNode(4)
ListNode3.next = ListNode4
var ListNode5 = new ListNode(5)
ListNode4.next = ListNode5


var oddEvenList = function(head) {
    var odd = head //奇数
    var even = head.next //偶数

    var str = ''
    while(odd !== null){
        str = str + odd.val
        if(odd.next !== null){
            odd = odd.next.next
        }else{
            break
        }
    }
    while(even !== null){
        str = str + even.val
        if(even.next !== null){
            even = even.next.next
        }else{
            break
        }
    }
    for(var i = 0; i < str.length; i++){
        var node = new ListNode(parseInt(str[i]))
        
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
};
oddEvenList(ListNode1)