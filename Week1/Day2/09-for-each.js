let arr = [25, 13, 14, 52, 89];

arr.__proto__.customForEach = function (cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(this[i], i, this);        
    }
}
/*
arr.forEach((element) => {
    console.log(element);
});*/

arr.customForEach((element) => {
    console.log(`Element = ${element}`);
});

arr.customForEach();