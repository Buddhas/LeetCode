var numJewelsInStones = function(J, S) {
    var num = 0
    for(var i = 0; i < J.length; i++){
        var temp = J.charAt(i)
        for(var j = 0; j < S.length;j++){
            if(temp === S.charAt(j)){
                num++
            }
        }
    }
    return num
};
