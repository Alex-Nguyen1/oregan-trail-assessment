class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt() {
        this.food += 2;
    }
    eat() {
        if (this.food > 0) {
            this.food -= 1;
        }
        else {
            this.isHealthy = false;
        }
    }
}

class Wagon {
    constructor(n) {
        this.capacity = n;
        this.passengerList = [];
    }
    getAvailableSeatCount() {
        let emptySeats = this.capacity - this.passengerList.length;
        return emptySeats;
    }
    join(Traveler) {
        if ( this.getAvailableSeatCount() > 0) {
            this.passengerList.push(Traveler);
             
        }
        else {
            console.log("No room for Traveler")
        }
    }
    shouldQuarantine() {
        for(let i = 0; i < this.passengerList.length; i++) {
            if (this.passengerList[i].isHealthy === false) {
                return true;
            }
        }
                return false;
        
    }
    totalFood() {
        let total = 0
        for(let i = 0; i < this.passengerList.length; i++) {
            total += this.passengerList[i].food
        }
        return total;
    }
}