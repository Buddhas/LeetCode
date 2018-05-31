function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
 }
var 
var maxDepth = function(root) {
    var leftlLength = 0
    var rightLength = 0
    var length = 0
    if(root != null){
        length = 1
        leftlLength = maxDepth(root.left)
        rightLength = maxDepth(root.right)
        if(leftlLength > rightLength){
            return length + leftlLength
        }else{
            return length + rightLength
        }
    }else{
        return length
    }
};