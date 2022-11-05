function isValid(str) {
    const left = ['(', '{', '[']
    // const right = [')', '}', ']']
    let stack = []
    let i = 0
    while(i < str.length) {
      if (left.includes(str[i])) {
        stack.push(str[i])
      } else {
        const currentStr = stack.pop()
        if (currentStr) {
          if (currentStr == '(' && str[i] != ')') {
            return false
          }
          if (currentStr == '{' && str[i] != '}') {
            return false
          }
          if (currentStr == '[' && str[i] != ']') {
            return false
          }
        } else {
          return false
        }
      }
      i++
    }
    if (stack.length == 0) {
      return true
    } else {
      return false
    }
  }