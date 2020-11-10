/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
   this
    this.big = big;
    this.small = small;
    this.medium = medium;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (carType === 3 && this.small > 0) {
        this.small = this.small - 1;
        return true;
    } else if (carType === 2 && this.medium > 0) {
        this.medium = this.medium - 1;
        return true;
    } else if (carType === 1 && this.big > 0) {
        this.big = this.big - 1;
        return true;
    } else {
        return false;
    }
};

 var obj = new ParkingSystem(1, 1, 0)
var param_1 = obj.addCar(3)

console.log(param_1);