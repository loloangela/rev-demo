// In JS you can have default val if a param is not provided
function defaultValues(one, two = 10, three = 15){
    console.log('one = ' + one, 'two = ' + two, three = 15);
}

defaultValues(2);
defaultValues();
defaultValues(5, 2);
defaultValues(5, undefined, 2);