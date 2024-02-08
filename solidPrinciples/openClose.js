// Open close says our class should be open for extension but closed for modification.

/**
 * before applying open close principle
 * if you see here the get range needs to be modified for all the vehicle.
 * say tomorrow we have full hybrid full eletric vehicle every time we introduce a vehicle we need to
 * add extra if else to the get range method.
 */
class Vehicle1 {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        let range = this.fuelCapacity * this.fuelEfficiency;

        if (this instanceof HybridVehicle1) {
            range += this.electricRange;
        }
        return range;
    }
}

class HybridVehicle1 extends Vehicle1 {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }
}

const standardVehicle1 = new Vehicle1(10, 15);
const hybridVehicle1 = new HybridVehicle1(10, 15, 50);

console.log(standardVehicle1.getRange()); // Outputs '150'
console.log(hybridVehicle1.getRange()); // Outputs '200'

//END OF BEFORE APPLYING OPEN CLOSE PRINCIPLE-----------------------------------------------------------------------



/**
 * after applying open close principle
 * So every time we intorduce a new type of vehicle we will just create a new class and extend it to vehicle.
 */
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    getRange() {
        return (this.fuelCapacity * this.fuelEfficiency) + this.electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'



