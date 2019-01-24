let bike = {
    frontGears: 3,
    backGears: 7,
    material: 'aluminum'
};

console.log(bike);

// We can use dot notation to access fields
console.log(`Our bike material is: ${bike.material}`);

// We also use bracket notation
console.log(`Our bike has ${bike[frontGears]} front gears`);

console.log(`Bike height: ${bike.height}`);

// We can dynamically add fields to your object
bike.height = 24;
console.log(`Bike height: ${bike.height}`);
