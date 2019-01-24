// Normally you would have your interface in a seperate file.
interface Plant{
    color: string,
    grow: (resource: any) => void
}

class VenusFlyTrap implements Plant{
    color = '';
    lifecycle = 'yearly';
    grow = () => {
        console.log(`Plant is growing and color is ${this.color}`);  
    }

    constructor(color: string){
        this.color = color;
    }
}

let myPlant: Plant = new VenusFlyTrap('green');
console.log(myPlant);
myPlant.grow('');

myPlant = {
    color: `blue`,
    grow: (resource) =>{

    }
}

// Object literals will not allow the JS feature of dynamically adding fields
// TS will enforce the rules basedon the class/interface structure
// myPlant.newField = 'whatever';