// Understanding the foreach and how to manipulate the array by id
// Also looking into the ternary operator
function bubbleSort(numArray) {
    let finished;
    do {
        finished = true;
        numArray.forEach((element, i, numArray) => {
            //DEBUG console.log(`Index: ${i}, Value: ${element}, Next Value: ${numArray[i + 1]}`);
            // Can not use ternary operator here since if statement does not return anything    
            if(element > numArray[i + 1]){
                    let temp = numArray[i + 1];
                    numArray[i + 1] = element;
                    numArray[i] = temp;
                    //DEBUG console.log(`Current Element: ${element}`);
                    finished = false;
                }
        });
    } while (!finished);
    return numArray;
}
let arr = [45, 61, 22, 13, 199, 65, 172, 11];
console.log(bubbleSort(arr));