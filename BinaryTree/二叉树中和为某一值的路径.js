const FindPath = (root, target) => {
    const path = []
    const result = []
    const findPathProcess = (root, path, sum) => {
        if (!root) return
        sum += root.value
        path.push(root.value)
        if (!root.left && root.right && sum === target) {
            result.push(path.slice(0))
        }
        if (root.left) {
            findPathProcess(root.left, path, sum)
        }
        if (root.right) {
            findPathProcess(root.left, path, sum)
        }
        path.pop()
    }
    findPathProcess(root, path, 0)
    return result
}