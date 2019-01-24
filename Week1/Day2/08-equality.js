function testEquality(first, second){
    console.log(`One is type: ${typeof(first)} and Value: ${first}
    Two is type: ${typeof(second)} and Value: ${second}
    One == Two returns ${first == second}
    One === Two returns ${first === second}`);
}

testEquality(0, '0');