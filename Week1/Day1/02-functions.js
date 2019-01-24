// Declare function and parameters
function add(one , two){
    // A function without a return statement will return undefined
    return one + two;
}

// Invoke function
let result = add(16, 2);
console.log(result);

// Use arrow notation to create functions
let arrowAdd = (one, two) => {
    return one + two;
}
let arrowResult = arrowAdd(25, 2);