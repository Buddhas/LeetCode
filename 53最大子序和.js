var maxSubArray = function(nums) {
    var startIndex = 0
    var endIndex = 0
    var countNum = 0
    var maxNum = nums[0]
    for(var i = 0; i < nums.length; i++){
        temp = nums[i]
        countNum = nums[i]
        if(maxNum < countNum){
            startIndex = i
            endIndex = j
            maxNum = countNum
        }
        for(var j = i + 1; j < nums.length; j++){
            countNum += nums[j]
            if(temp < countNum){
                temp = countNum
                if(maxNum < countNum){
                    startIndex = i
                    endIndex = j
                    maxNum = countNum
                }
            }
        }
    }
    return maxNum
};
console.log(maxSubArray([-2,1]))
