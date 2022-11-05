var findMedianSortedArrays = function (nums1, nums2) {
    const result = sort(nums1, nums2)
    const mid = result.length / 2
    if (result.length % 2 === 0) {
        return (result[mid] + result[mid - 1]) / 2
    } else {
        return result[Math.floor(mid)]
    }
};

var sort = function (nums1, nums2) {
    let result = []

    if (nums1.length <= 0) return nums2
    if (nums2.length <= 0) return nums1

    if (nums1[0] < nums2[0]) {
        result.push(nums1.shift())
    } else {
        result.push(nums2.shift())
    }
    result.push(...sort(nums1, nums2))

    return result
}