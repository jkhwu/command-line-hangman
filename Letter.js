// CONSTRUCTS EACH LETTER OBJECT

const log = console.log;

class Letter {
    constructor(letter) {
        this.letter = letter;
        this.isGuessed = false;
    }
    display() {
        if (this.letter == "." || this.letter == " ") return this.letter;
        else if (this.isGuessed == true) return this.letter;
        else return "_";
    }
    check(guess) {
        if (guess == this.letter) this.isGuessed = true;
    }
    printStats() {
        for (const key in this) log(`${key}: ${this[key]}`);
    }
}

module.exports = Letter;

// TESTING AREA

// let test = new Letter("a");
// test.printStats();
// log(test.display());
// test.check("a");
// log("new isGuessed: " + test.isGuessed);