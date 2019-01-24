// We can control the flow of code through various means

// If statements
let a = true;
if(a){
    console.log('a is true');
} else{
    console('a is false.');
}

let b = false;
if(a && b){
    console.log('a and b are both true');
} else if (a && !b){
    console.log('a is true and b is false.')
}else{
    console.log('This is the default statement');
}

let w = true;
let x = 1;
while(w){
    console.log('Inside while loop ' + x);
    const random = Math.floor(Math.random() * 5);
    x++;
    if(random === 3){
        w = false;
    }
}

let doW = false;

do{
    console.log('Do ... while');
    const random = Math.floor(Math.random() * 5);
    x++;
    if(random === 3){
        doW = false;
    }else{
        doW = true;
    }
}while(doW);

for(let i =0; i < 5; i++){
    console.log(`For Loop: ${i}`);
}
console.log('For Loop Over');

let switchCase = 'hello';
switch (switchCase) {
    case 'hello':
        console.log('world');
        break;
    case 5:
        console.log('number');
        break;
    default:
        break;
}
// Terniary if true do b4 colon (if else statement with return statements)
// Get complicated quickly
let result = ( 5 < 25) ? 't' : false;
console.log(result);