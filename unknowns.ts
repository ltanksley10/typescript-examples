//unknown type

let userInput: unknown; 
let userName: string;
//can store any value without getting errors
//similar to any type but different
//any is most flexible type - unknown is a bit more restrictive
//with unknown we must first check type stored

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;    
}
//unknown is better than any - makes sure you can't do everything

//===============================

// never type

function generateError(message: string, code: number) {
    throw {message: message, errorCode: code};
}
//this function never produces a return statement
// infinite loops also never return

generateError('An error occred!', 500); 