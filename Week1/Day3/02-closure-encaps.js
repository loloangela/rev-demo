function bike(numSpeeds, material){
    let numberSpeeds = numSpeeds;
    let bikeMaterial = material;

    this.getNumberSpeeds = () => {
        return numberSpeeds;
    }
    this.setNumberSpeeds = (numSpeeds) => {
        numberSpeeds = numSpeeds;
    }

    this.getBikeMaterial = () => {
        return bikeMaterial;
    }
    this.setBikeMaterial = (material) => {
        bikeMaterial = material;
    }
}

// Here we are using the function as a constructor to create an object
let myBike = new bike(23, 'titanium');
console.log(`Number of Speeds: ${myBike.getNumberSpeeds()}
Bike Material: ${myBike.getBikeMaterial()}`);
