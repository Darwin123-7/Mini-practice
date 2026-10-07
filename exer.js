class info {
    constructor(name) {
        this.name = name;
        this.age = 19;
        this.score = 75;
    }

    printInfo() {
        return `Name: ${this.name}\nAge: ${this.age}\nScore: ${this.score}`;
    }
}

const name1 = new info("Darwin");
console.log(name1.printInfo())