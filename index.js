

// add
function add(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    tmp.valueOf = function () {
        return sum;
    };
    return tmp;
}

function isNumber(a) {
    return (!isNaN(a) && typeof a === 'number');
}


function test2(arr) {
    if (arr === 1) {
        return true;
    } else {
        return false
    }
}

module.exports = {
    add: add,
    test2: test2,
    isNumber: isNumber
};

// module.exports = {add,isNumber}