// 双指针
// var subarraySum = function(nums, k) {
//   let num = 0;
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j <= nums.length; j++) {
//       const currentArr = nums.slice(i, j)
//       if (k === sum(currentArr)) {
//         num++
//       }
//     }
//   }
//   return num;
// };

// const sum = (arr) => {
//   return arr.reduce((pre, current) => {
//     return pre + current
//   }, 0)
// }

const subarraySum = (nums, k) => {
  const map = { 0: 1 };
  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }

    if (map[prefixSum]) {
      map[prefixSum]++;
    } else {
      map[prefixSum] = 1;
    }
  }
  return count;
};

subarraySum([1,2,3], 3)