// Var, Let Const
// If a variable is outside of all code it will act as a global variable

var g = 10;
let h = "hello";

const c = 'world';
// c = '5'; We will get an error

/*
// Will not allow it to be declared twice. (With var it will not error due to hoisting)
let x = "bitch";
let x = "bitch";*/
function scope(){
    if(true){
        // Var is scoped to the nearest function keyword and declaration is pulled to the top of its scope
        var a = 5;

        // Let and Const are scoped by the block they are in.
        let b = 10;
    }
    console.log(a);
    console.log(b);
}