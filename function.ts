function square(num: number):number{
    return num*num;
}

console.log(square(5));

//function expression
const squareFe = function (num: number) {
    return num*num;
}
console.log('higher oder function')
//higher-oder function
function add(a:number):Function{
    return function (b: number) :number{
        return a+b;
    }
}

const addWith = add(5);
console.log(add(3));
console.log(add(15));