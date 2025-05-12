class Animal {
    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    get age() {
        return this.#age;
    }

    haveBirthday() {
        this.#age += 1;
        console.log(`Happy birthday ${this.name}! You are now ${this.#age} years old.`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}

const rex = new Dog('Rex', 5, 'Golden Retriever');
rex.speak();        // Rex barks.
rex.fetch();        // Rex is fetching the ball!
rex.haveBirthday(); // Happy birthday Rex! You are now 6 years old.
