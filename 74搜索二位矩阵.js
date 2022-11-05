var searchMatrix = function (matrix, target) {
    let resultRow = []

    for (let i = 0; i < matrix.length; i++) {
        let currentItem = matrix[i]
        if (target >= currentItem[0] && target <= currentItem[currentItem.length - 1]) {
            resultRow = [...currentItem]
            break
        }
    }

    let left = 0
    let right = resultRow.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (resultRow[mid] === target) return true
        if (resultRow[mid] > target) right = mid - 1
        if (resultRow[mid] < target) left = mid + 1
    }
    return false
};

console.log(searchMatrix([[1], [3]]
    , 3))