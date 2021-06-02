//an alias can be created to simplify union types
type Combinable = number | string;

// typescript allows multiple types to be available/used
// this is called union types
function combine (
    input1: number | string | boolean, 
    input2: Combinable, 
    resultConversion: 'as-number' | 'as-text'
) {
    let result; 
    //union types will not allow variables to be concatenated without
    //type of check first
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        // plus sign makes them a number - works like parseFloat
        const result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// literal types are third option
const combinedAges = combine(20, 34, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);