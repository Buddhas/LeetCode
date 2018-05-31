var shortestToChar = function(S, C) {
    //首先记录下S中所有含有C的元素的位置
    var aimPosition = []
    for(var i = 0; i < S.length; i++){
        if(C === S.charAt(i)){
            aimPosition.push(i)
        }
    }
    //一个个比较
    var result = []
    for(var i = 0; i < S.length; i++){
        var temp = Math.abs(aimPosition[0] - i)
        for(var j = 1; j < aimPosition.length; j++){
            var length = Math.abs(aimPosition[j] - i)
            if(length < temp){
                temp = length
            }
        }
        result.push(temp)
    }

    return result

};