function square(num) {
    return num * num;
}
console.log(square(5));
//function expression
var squareFe = function (num) {
    return num * num;
};
console.log('higher oder function');
//higher-oder function
function add(a) {
    return function (b) {
        return a + b;
    };
}
var addWith = add(5);
console.log(addWith(3));
console.log(addWith(15));
