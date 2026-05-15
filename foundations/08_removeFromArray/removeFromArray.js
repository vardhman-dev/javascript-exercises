const removeFromArray = function(arr, ...args) {
    let modifiedArray = [];
    for(let a of arr){
        if (!args.includes(a)){
            modifiedArray.push(a);
        }
    }
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
