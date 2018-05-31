function ListNode(val) {
    this.val = val;
    this.next = null;
}
var newHead = null
var reverseList = function(head) {
   
    digui(head)
    return newHead
};

function digui(head){
    if(head.next && head.next !== null ){
        digui(head.next).next = head
        head.next = null
        return head
    }else{
        if(head instanceof ListNode){
            newHead = head
            return head
        }else{
            newHead = new ListNode("")
        }
        
    }
    
}

var l1 = new ListNode(1)
var l2 = new ListNode(2)
l1.next = l2
var l3 = new ListNode(3)
l2.next = l3
var l4 = new ListNode(4)
l3.next = l4
var l5 = new ListNode(5)
l4.next = l5 

console.log(reverseList(l1))
