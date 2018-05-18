function longestPalindrome(s){
    var startIndex = 0
    var endIndex = 0

    var resStart = 0
    var resEnd = 0
    var maxLen = 0
    var countLen = 0
    
    for(var i = 0; i < s.length; i++){
        //当回文为奇数的时候的处理方案
        startIndex = i - 1
        endIndex = i + 1
        countLen = 0
        while(startIndex >= 0 && endIndex <= s.length){
            if(s[startIndex] === s[endIndex]){
                countLen++
                startIndex--
                endIndex++
            }else{
                startIndex++
                endIndex--
                break
            }
            
        }
        if(maxLen < countLen){
            if(startIndex < 0){
                startIndex = 0
            }
            if(endIndex > s.length){
                endIndex = 0
            }
            resStart = startIndex
            resEnd = endIndex
            maxLen = countLen
        }

        //当回文为偶数的时候的处理方案
        startIndex = i 
        endIndex = i + 1
        countLen = 0
        while(startIndex >= 0 && endIndex <= s.length){
            if(s[startIndex] === s[endIndex]){
                countLen++
                startIndex--
                endIndex++
            }else{
                startIndex++
                endIndex--
                break
            }
            
        }
        if(maxLen < countLen){
            if(startIndex < 0){
                startIndex = 0
            }
            if(endIndex > s.length){
                endIndex = 0
            }
            resStart = startIndex
            resEnd = endIndex
            maxLen = countLen
        }
    }

    console.log(s.substring(resStart,resEnd + 1))
}

longestPalindrome('ccbbaa')