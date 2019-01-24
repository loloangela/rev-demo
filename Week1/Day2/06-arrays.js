let arr = [5, 25, 'Hello', {a: 'object'}, true];
console.log(arr);

let index3 = arr[3];
console.log(index);

arr.push('potato');
console.log(arr);

arr.unshift('egg');
console.log(arr)

arr.splice(2, 0, "sweet potato");
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(`Index = ${i}, Element = ${arr[i]}`);
}

// Enhanced For Loop, For Each Loop
for (const element of arr){
    console.log(element);
}