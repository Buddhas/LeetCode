var searchInsert = function(nums, target) {
    var low = 0
    var high = nums.length - 1
    if(target <= nums[0]){
        return 0
    }
    if(target > nums[high]){
        return nums.length
    }
    if(target == nums[high]){
        return nums.length - 1
    }
    while(low <= high){
        mid = parseInt((low + high)/2)
        if(nums[mid] == target){
            return mid
        }
        if(target > nums[mid]){
            low = mid + 1
        }
        if(target < nums[mid]){
            high = mid - 1
        }
    }
   return low
    
};
console.log(searchInsert([1,3,5,6],2))
