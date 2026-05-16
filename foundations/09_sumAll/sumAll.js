const sumAll = function (num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1>=0 && num2>=0) {

        if (Number.isFinite(num1) && Number.isFinite(num2)) {

            if (num2 > num1) {
                sum = 0
                for (let i = num1; i <= num2; i++) {
                    sum += i;
                }
                return sum;
            }
            else {
                sum = 0
                for (let i = num2; i <= num1; i++) {
                    sum += i;
                }
                return sum;
            }
            
        }
        return "ERROR";
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
