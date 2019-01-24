/**
 * In a boolean context if we have a noon-boolean type JS will use a set of rules to determine if it 
 * should be true or false.
 * 0, '', null, undefined, NaN, false evaluate to false everything else evaluates to true.
 * @param {*} val 
 */
function truthyFalsy(val){
    console.log(`The value ${val} is of type ${typeof(val)} and has a truthy value of ${!!val}`);
}

truthyFalsy(0);
truthyFalsy('0');
truthyFalsy('Hello');
truthyFalsy(truthyFalsy);
truthyFalsy('');
truthyFalsy(true);
truthyFalsy(undefined);
truthyFalsy(null);
truthyFalsy({});
truthyFalsy(NaN);
truthyFalsy('false');
truthyFalsy(-1);

// Prove it
if('hello'){
    console.log('Hello is truthy');
}