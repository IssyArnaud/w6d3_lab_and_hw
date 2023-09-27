class IsogramFinder {
    constructor(word) {
        this.word = word
    }

    // toLowerCase(){
    //     return this.word.map(letter => letter.toLowerCase())
    // }

    isIsogram(){
        return this.word.split('').every((letter, index) => this.word.indexOf(letter) === index)
    }

    // isIsogram() {
    //     return new Set(this.word.toLowerCase()).size === this.word.length
    // }
}
module.exports = IsogramFinder;
