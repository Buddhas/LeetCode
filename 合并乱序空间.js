var merge = function (intervals) {
    if (intervals.length <= 1) return intervals
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let result = []
    let i = 0
    while (i < intervals.length) {
        let cur = [...intervals[i]]
        let j = i + 1
        while (j < intervals.length && cur[1] >= intervals[j][0]) {
            cur[1] = Math.max(cur[1], intervals[j][1])
            j++
        }
        result.push(cur)
        i = j
    }

    return result

};

merge([[1, 4], [0, 4]]
)