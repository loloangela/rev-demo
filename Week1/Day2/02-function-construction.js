// Tradiitonally this is how people created classes in JS

function Bike(frontGears, backGears, material){
    this.frontGears = frontGears;
    this.backGears = backGears;
    this.material = material;

    this.ride = () => {
        console.log('Woohoo, you\'re riding the bike!');
    }
}

let myBike = new Bike(3, 7, 'carbon');
let otherBike = new Bike(1, 3, 'aluminum');
console.log(myBike);
console.log('Other Bike: ', otherBike);

myBike.ride();