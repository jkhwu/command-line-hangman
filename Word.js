let letter = require("./Letter.js");
let log = console.log

// CONSTRUCTS CURRENT WORD OBJECT
class Word {
    constructor(word) {
        this.ansArr = word.split("").map((x) => new Letter(x.toUpperCase()));
    }
    stringWord() {
        let str = "";
        this.ansArr.forEach(letter => str += letter.display());
        return str;
    }
    runChecks(char) {
        this.ansArr.forEach(letter => letter.check());
    }
    printStats() {
        for (const key in this) log(`${key}: ${this[key]}`);
    }
}

module.exports = Word;

// TESTING AREA

let test = new Word("Alabama");
// test.printStats();
// log(Array.isArray(test.ansArr));
// log(test.display());
// test.check("a");
// log("new isGuessed: " + test.isGuessed);