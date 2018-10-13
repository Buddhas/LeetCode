function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var arr = [];
var sumNumbers = function(root) {
  sum1(root, 0);
};

var sum1 = function(root, sum) {
 
    if(root.left !== null){
        sum1(root.left, root.val + sum);
    }else{
        arr.push(root.val + sum);
    }
    if(root.right !== null){
        sum1(root.right, root.val + sum);
    }else{
        arr.push(root.val + sum);
    }
  
};


var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)


a1.left = a2
a1.right = a3

sumNumbers(a1)
console.log(arr)