const subsets = (nums) => {
    let result = [[]];
    const innerSubsets = (current, currentNums) => {
        for (let i = 0; i < currentNums.length; i++) {
            current.push(currentNums[i])
            result.push([...current])
            innerSubsets(current, currentNums.slice(i + 1))
            current.pop()
        }
    }
    innerSubsets([], nums)
    console.log(result)
    return result
}

subsets([1, 2, 3])