var findErrorNums = function(nums) {
    nums.sort((a,b) =>{
        return a-b
    })
    var maxLength = nums.length
    var resultArr = []
    for(var i = 1; i <= maxLength; i++){
       if(nums.indexOf(i) === -1){
            resultArr.push(i)//找到了缺失的数字
       }
    }
    nums.push(resultArr[0])
    var sum1 = sum(nums)
    var sumArr = []
    for(var i = 0; i < maxLength; i++){
        sumArr.push((i+1))
    }
    var sum2 = sum(sumArr)
    var second = sum1 - sum2
    resultArr.push(second)
    return resultArr
};
function sum(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(findErrorNums([1,2,2,4]))

