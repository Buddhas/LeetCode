var generate = function(numRows) {
    var arr = init(numRows)
    for(var i = 1; i <= numRows; i++){
        for(var j = 1; j <= i; j++){
            if(i == 1 && j == 1){
                arr[i][j] = 1
            }else{
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
            }
        }
    }
    //组装返回数组
    var returnArr = [];
    for(var i = 1; i <= numRows; i++){
        var temp = []
        for(var j = 1; j <= i; j++){
            temp.push(arr[i][j])
        }
        returnArr.push(temp)
    }
    return returnArr
};

//初始化二维数组
var init = function(numRows){
    var arr = new Array(numRows + 1)
    for(var i = 0; i < numRows + 1; i++){
        arr[i] = new Array(numRows + 1)
        for(var j = 0; j < numRows + 1; j++){
            arr[i][j] = 0
        }
    }
    return arr
}

generate(5)