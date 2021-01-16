var letterCombinations = function(digits) {
    var arr = []
    var sb = []
    var a = ["","","abc","def",  
    "ghi","jkl","mno","pqrs","tuv","wxyz"]
    zuhe(arr,0,digits,sb,a)
    return arr
};

var zuhe = function(arr,n,digits,sb,a){
    if(n === digits.length){
        arr.push(sb.join(""))
        return 
    }
    for(var i = 0; i <a[digits.charAt(n) - 0].length;i++ ){
        sb.push(a[digits.charAt(n) - 0].charAt(i))
        zuhe(arr,n + 1,digits,sb,a)
        sb.pop()
    }

}
console.log(letterCombinations("393"))
