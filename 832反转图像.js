var flipAndInvertImage = function(A) {
    var B = []
    //先反转每一行
    for(var i = 0; i < A.length; i++){
        var item = A[i]
        item.reverse()//reverse修改的是原数组
        B.push(item)
    }
    //反转图片
    for(var i = 0; i < B.length; i++){
        var doubleItem = B[i]
        doubleItem.forEach((item,index) =>{
            if(item === 1){
                doubleItem[index] = 0
            }else if(item === 0){
                doubleItem[index] = 1
            }
        })
    }
    return B
};