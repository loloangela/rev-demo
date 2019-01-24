const a = NaN;
const b = 'Hello';
const c = a && b;
console.log(c);

function printName(obj){
    console.log(obj && obj.name);
}

printName({name: 'Mohamed'});
// printName(null); will get null pointer
// To allow this we will need to use a guard operator
printName(null);