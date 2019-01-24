/**
 * In ES6 JS introduced classes.
 */

 class Bike {
    constructor(frontGears, backGears, material){
        this.frontGears = frontGears;
        this.backGears = backGears;
        this.material = material; 

        // there is a difference when the function is included in the constructor - explore this
    }
    ride() {
        console.log('Woohoo, you\'re riding the bike!');
    }
 }

 let myBike = new Bike(3, 7, 'carbon');
 console.log(myBike);