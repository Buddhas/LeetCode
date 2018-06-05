var arr = []

var generateParenthesis = function(n) {
    helper("",n,0,0)
    return arr
};

var helper = function(cur,n,left,right){
   
    if(right === n && left === n){
        if(isValid(cur)){
            arr.push(cur)
        }
        
    }
    if(left < n){
        
        helper(cur + "(",n,left + 1,right)
    }
    if(right < n){
        
        helper(cur + ")",n,left,right + 1)
    }
}

var isValid = function(s) {
    if(s.length === 0){
        return true
    }
    if(s.length % 2 !== 0){
        return false
    }

    var str = []
    for(var i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            str.push(s[i])
        }else if(s[i] === ")"){
            if(str.length === 0){
                return false
            }else{
                if(str[str.length - 1] === "("){
                    str.pop()
                    continue
                }else{
                    return false
                }
            }
        }else if(s[i] === "}"){
            if(str.length === 0){
                return false
            }else{
                if(str[str.length - 1] === "{"){
                    str.pop()
                    continue
                }else{
                    return false
                }
            }
        }else if(s[i] === "]"){
            if(str.length === 0){
                return false
            }else{
                if(str[str.length - 1] === "["){
                    str.pop()
                    continue
                }else{
                    return false
                }
            }
        }
    }
    if(str.length === 0){
        return true
    }else{
        return false
    }
};

console.log(generateParenthesis(1))