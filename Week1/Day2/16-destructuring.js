const obj = {
    name: 'Juan',
    a: 2,
    test: 35
}

// We can abstract the variables from an object so we can use it conviently throughout the code
// Create a variable, that has the value of fields with the name
// It will not affect the object
let {name, a} = obj;
console.log(`a = ${a}, and name = ${name}`);