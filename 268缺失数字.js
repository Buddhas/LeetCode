var missingNumber = function(nums) {
    var nums = nums.sort((m,n) =>{
        if(m < n){
            return -1
        }
        if(m === 0){
            return 0
        }
        if(m > n){
            return 1
        }
    })
    if(nums.length === 1 && nums[0] == 0){
        return 1
    }
    var maxNum = nums[nums.length - 1]
    for(var i = 0; i <= maxNum; i++){
        if(nums[i] !== i){
            return i
        }
    }
};

missingNumber([[0,1]])


