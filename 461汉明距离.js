function convert(num) {
    
    var temp = num;
    var arr = new Array();
    for (var i = 0; 1; i++) {
        if (num / 2 >= 1) {
            arr[i] = num % 2;
            num = parseInt(num / 2);
        } else {
            arr[i] = 1;
            break;
        }
    }
    console.log(temp)
    for (i = arr.length; i > 0; i--) {
        console.log(arr[i-1]);
    }
}
function transform(num){

    var arr = []
    if(num > 0){//正整数取二进制
        while(num >= 1){
            var item = num%2
            arr.push(item)
            num = parseInt(num/2)
        }
        return arr.reverse()
    }else if(num < 0){
        num = Math.abs(num)//负整数取二进制
        while(num >= 1){
            var item = num%2
            arr.push(item)
            num = parseInt(num/2)
        }
        arr = arr.reverse()
        //取反加一
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === 0){
                arr[i] = 1
            }else{
                arr[i] = 0
            }
        }
        //加一
        var flag = 0//进制标志
        for(var i = arr.length - 1; i <= 0; i++){
            if(i === arr.length && arr[i] === 1){
                flag = 1
                arr[i] = 0
            }else if(i === arr.length && arr[i] == 0){
                flag = 0
                arr[i] = 1
                break
            }else if(i < arr.length){
                if(flag === 1 && arr[i] === 1){
                    arr[i] = 0
                    flag = 1
                    continue
                }else if(flag === 1 && arr[i] === 0){
                    arr[i] = 1
                    flag = 0
                    break
                }
            }
        }
        return arr
    }
    
    
}
console.log(transform(-4))
