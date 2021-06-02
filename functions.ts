function add (n1: number, n2: number) {
    return n1 + n2;
}

//void is implecit only included for demo purposes
//void means there is no return statement
//typescript automatically recognizes this it's not necessary to include
function printResult(num: number): void {
    console.log('Result: ' + num);
}
//undefined can be included as a type in typescript
//functions are not allowed to return undefined in typescript
//must use void instead
//if you have a return statement undefined can then be used

printResult(add(5, 12));

//===========================
//functions can also be a type
// can be created with arrow notation
// let combineValues: (a: number, b: number) => number;

let combineValues: Function; 

combineValues = add;

console.log(combineValues(8, 8));

//============================
//using types with callback functions

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});