var str = "bbaadefscdf"

/*var change = function(str){
    str.split().sort((m,n) =>{
        var first = m.charCodeAt()
        var second = n.charCodeAt()
        if(first <= second){
            return - 1
        }
        if(first > second){
            return 1
        }
    }

console.log(change(str))*/

var change = function(str){
    var str1 = str.split("").sort().join("")
    return str1
}

console.log(change(str))