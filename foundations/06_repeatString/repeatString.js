const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR";
    }
    
    if(num===0 || str === ""){
        return "";
    }
    initial = str;
    for(let i = 1; i<num; i++){
        str = str + initial;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
