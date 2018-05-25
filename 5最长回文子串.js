
//普通方法求最长回文子串
/*function longestPalindrome(s){
    var startIndex = 0
    var endIndex = 0

    var resStart = 0
    var resEnd = 0
    var maxLen = 0
    var countLen = 0
    
    if(s.length == 1){
        return s
    }
    for(var i = 0; i < s.length; i++){
        
        //回文数为偶数时的处理方案
        startIndex = i
        endIndex = i + 1
        countLen = 1
        while(startIndex >=0 && endIndex <= s.length - 1){
            if(s[startIndex] === s[endIndex]){
                countLen++
                startIndex--
                endIndex++
            }else{
                break
            }
        }
        countLen = (s.slice(++startIndex,endIndex)).length
        if(countLen > maxLen){
            maxLen = countLen
            resStart = startIndex
            resEnd = endIndex
        }
        //回文数为奇数时的处理方案
        startIndex = i - 1
        endIndex = i + 1
        countLen = 1
        while(startIndex >=0 && endIndex <= s.length - 1){
            if(s[startIndex] === s[endIndex]){
                countLen++
                startIndex--
                endIndex++
            }else{
                break
            }
        }
        countLen = (s.slice(++startIndex,endIndex)).length
        if(countLen > maxLen){
            maxLen = countLen
            resStart = startIndex
            resEnd = endIndex
        }
    }
   return s.slice(resStart,resEnd)
}
console.log(longestPalindrome("babad"))
*/


//动态规划求回文子串
function longestPalindrome(s){
    var left = 0
    var len = 0
    var right = 0
    //二维数组保存串的状态
    var db= new Array(s.length)
    for(var i = 0; i < s.length; i++){
        db[i] = new Array(s.length)
    }
    for(var i = 0; i < s.length;i++){
        for(var j = 0; j < s.length; j++){
            db[i][j] = 0
        }
    }

    for(var i = 0; i < s.length; i++){
        for(var j = 0; j < i; ++j){
            db[j][i] = (s[i] == s[j] && (i - j < 2 || db[j + 1][i - 1]))
            if(db[j][i] && len < i - j + 1){
                len = i - j + 1;
                left = j;
                right = i;
            }
        }
        db[i][i] = 1
    }
    return s.substr(left,right - left + 1)
}