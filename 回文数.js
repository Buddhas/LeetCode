var isPalindrome = function(x) {
    
    x = x + ""
    var isOll = (x.length)%2
    if(isOll == 0){//为偶数时的判断
        var i = 0;
        var j = x.length - 1
        while(i < j){
            if(x[i] == x[j]){
                i++
                j--
            }else{
                break
            }
        }
        if(i >= j){
            return true
        }else{
            return false
        }
    }else{
        var i = 0
        var j = x.length - 1
        while(i != j){
            if(x[i] == x[j]){
                i++
                j--
            }else{
                break
            }
        }
        if(i == j){
            return true
        }else{
            return false
        }
    }

};

isPalindrome(11)