function myCallBack(p){
    console.log(`Callback function invoked with parameter ${p}`);
}

// The parameter is a function
function callWithPotato(fun){
    console('function = ', fun);
    fun('potato');
}

callWithPotato(myCallBack);
// A lot of times a callback function is provided with an anonymous function (lambda)
callWithPotato((param) => {
    console.log(`lambda callback invoked with: ${param}`)
});