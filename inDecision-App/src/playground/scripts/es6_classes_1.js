class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription () {
        return `${this.name} is ${this.age} year(s) old.`;
    }

    getGreetings () {
        return `Hi, this is ${this.name}`;
    }
}

class Traveler extends Person{

    constructor (name , age, location){
        super(name, age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGreetings (){
        let greetings = super.getGreetings();
        
        if (this.hasLocation()) {
           greetings += ` from ${this.location}`;
           return greetings;
        }
        return greetings;
    }
}

const newTraveler = new Traveler('Andrew', 26, 'PK')
const otherTraveler = new Traveler ();

console.log(newTraveler.getGreetings());
console.log(otherTraveler.getGreetings());