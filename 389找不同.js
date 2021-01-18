var findTheDifference = function(s, t) {
    var s = s.split("").sort().join("")
    var t = t.split("").sort().join("")
    for(var i = 0; i < s.length; i++){
        if(s[i] !== t[i]){
            return t[i]
        }
    }
    if(i === t.length - 1){
        return t[i]
    }
};
console.log(findTheDifference("acbd",
"abcde"))