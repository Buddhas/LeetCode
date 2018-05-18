var reverse = function(x) {
    var math = Math.pow(2,31) + ''
    math = '-' + math
    math = parseInt(math)
    console.log(Math.pow(2,31))
    if(x > (Math.pow(2,31) - 1) || x == 0){
        return 0
    }else if( x < math){
        return 1
    }

    else{
        
        x = (x + "").split('')
        var j = 0
        if(x[0] === '-'){
            x.shift()
            j = 1
        }
        x = x.reverse()
        if(x[0] === '0'){
            x.shift()
        }
        if(j == 1){
            x.unshift('-')
        }
        x = x.join('')
        x = parseInt(x)
    }
    if(x > (Math.pow(2,31) - 1)){
        return 0
    }else if( x < math){
        return 0
    }
    return x
};

console.log(reverse(123))