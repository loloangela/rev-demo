const obj = {
    name: 'Juan',
    a: 2,
    test: 35
}

class user {
    constructor(){
        this.name =  'Lori';
        this.a = 16;
        this.test = 45;
    }
    
}

// We can abstract the variables from an object so we can use it conviently throughout the code
// Create a variable, that has the value of fields with the name
// It will not affect the object
let {name, a} = obj;
console.log(`a = ${a}, and name = ${name}`);

let { x } = obj;

console.log(`Name: ${x.name}\nA: ${x.a}\nTest: ${x.test}`);