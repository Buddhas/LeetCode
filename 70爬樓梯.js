/*var climbStairs = function(n) {
    var arr = []
    count(arr,n, 0,1)
    count(arr,n, 0,2)
    return arr.length
};

var count = function(arr,n,countStep,setp){
    if(countStep + setp > n){
        return
    }
    if((countStep + setp) === n){
        arr.push("1")
    }else{
        count(arr,n,countStep + setp,1) 
        count(arr,n,countStep + setp,2)
    }
}
console.log(climbStairs(38))*/

var climbStairs = function(n) {
    if(n === 1){
        return 1
    }
    if(n === 2){
        return 2
    }
    var arr = new Array(n + 1)
    for(var i = 1; i < (n + 1); i++){
        arr[i] = 0
    }
    arr[1] = 1
    arr[2] = 2
    climb(arr,n)
    return arr[n]
}

var climb = function(arr,n){
    var x = n - 1
    var y = n -2
    if(x > 2 && arr[n] === 0){
        climb(arr,x)
    }
    if(y > 2 && arr[n] === 0){
        climb(arr,y)
    }
    return arr[n] = arr[x] + arr[y]
}
console.log(climbStairs(38))

