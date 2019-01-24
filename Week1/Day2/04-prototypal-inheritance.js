let one = {
    a: 5,
    b: 10
}

let two = {
    b: 'parent',
    c: 'c'
}


// Make one inherit from two
// If one doesn't have the field it will look to two
one.__proto__ = two;
console.log(one.c);
// This is how classes work, every object stems from somewhere

let three = {}
// Here we go up the inheritance chain to the base object and dynamically created a variable to it.
three.__proto__.potato = 'mashed';
// We can get this value by using any object since we have attached the variable to the base object
console.log(one.potato);

// Num doesn't have a potato
let num = 5;
console.log(num.potato);