var judgeCircle = function(moves) {
    var initPosition = [0,0]
    for(var i = 0; i < moves.length; i++){
        var step = moves.charAt(i)
        switch(step){
            case 'R':initPosition[0]++
                break
            case "L":initPosition[0]--
                break
            case "U":initPosition[1]++
                break
            case "D":initPosition[1]--
                break
            default:
                break
        }
    }
    if(initPosition[0] === 0 && initPosition[1] === 0){
        return true
    }else{
        return false
    }
};