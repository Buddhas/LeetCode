var singleNumber = function (nums) {
    let ans = 0;
    for (const num of nums) {
        ans ^= num;
        console.log(ans)
    }
    return ans;
};

singleNumber([2, 2, 1])