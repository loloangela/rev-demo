// a can contain a number or a string
let a: number | string = 5;
a = 'Hello';

console.log(a);

function add(one: number, two: number): number{
    return one + two;
}

a = add(5, 25);
console.log(a);