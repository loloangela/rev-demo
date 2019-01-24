
let obj = {}; // For web

function outer(){
    let a = 5;
    return (newValue) => {
        if(newValue){
            a = newValue;
        }
        return a;
    }
}
obj.inner = outer(); //For web
// inner is now set to the anonymous function inside the outer()
let inner = outer();
console.log(inner());
console.log(inner('Hello'));

// Because the var a exists outside of the scope of outer(), a remains with previous value
console.log(inner());