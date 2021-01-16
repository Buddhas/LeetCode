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


isValid("((")