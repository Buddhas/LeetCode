var uniquePaths = function(m, n) {
    var arr = createDoubleArr(m,n)
    for(var i = 0; i < n; i++){
        for(var j = 0; j < m; j++){
            if(i === 0 || j === 0){
                arr[i][j] = 1
            }else{
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
            }
        }
    }
    return arr[n -1 ][m - 1]
};

var createDoubleArr = function(m,n){
    var arr = new Array(n)
    for(var i = 0; i < n; i++){
        arr[i] = new Array(m)
    }
    for(var i = 0; i < n; i++){
        for(var j = 0; j < m; j++){
            arr[i][j] = 0
        }
    }
    return arr
}