var averageArr = []
var averageObj = []

var initLayer = 0
var initArrLayer = 0
var layer1 = 0
var averageNum = 0


var maxLayer = 0

var averageOfLevels = function(root) {
    assemblyObj(root,0)
    //找到最大的一层
    for(var i = 0; i <averageObj.length; i++){
        if(averageObj[i].layer > maxLayer){
            maxLayer = averageObj[i].layer
        }
    }

    for(var i = 0; i <= maxLayer; i++){
        averageNum = 0
        layer1 = 0
        for(var j = 0; j < averageObj.length;j++){
            if(averageObj[j].layer == i){
                layer1++
                averageNum = averageNum + averageObj[j].num
            }
        }
        averageArr.push(averageNum/layer1)
    }
    return averageArr
};


function assemblyObj(root,layerNum){
    
    if(root.left !== null){
        var leftNum = layerNum + 1
        assemblyObj(root.left,leftNum)
    }
    if(root.right !== null){
        var rightNum = layerNum + 1
        assemblyObj(root.right,rightNum)
    }
    //后续遍历，比较好算
    averageObj.push({
        num:root.val,
        layer:layerNum
    })
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

 var t1 = new TreeNode(5)
 var t2 = new TreeNode(2)
 var t3 = new TreeNode(-3)
 t1.left = t2
 t1.right = t3


console.log(averageOfLevels(t1))
