const obj = {
    a: 1,
    b: 'hello',
    c: 'c'
}

const obj2 = {
    ... obj,
    a: 55,
    added: 'added'
}

console.log(obj2);
console.log(obj);

// Arrays
const arr = [1, 22, 2];
const arr2 = [13, ...arr, 4];

console.log(arr);
console.log(arr2);
