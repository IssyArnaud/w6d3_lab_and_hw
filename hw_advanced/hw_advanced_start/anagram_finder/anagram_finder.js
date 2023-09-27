class AnagramFinder {
    constructor(word){
        this.word = word
    }

    toLowerCase(){
        return this.word.map(word => word.toLowerCase())
    }

    isPotentialAnagram(word){
        return this.word.length === word.length
    }

    isNotSameWord(word){
        return this.word !== word
    }

    isAnagram (word){
        if (this.isPotentialAnagram(word) && this.isNotSameWord(word))
        return this.word.toLowerCase().split('').every(letter => word.toLowerCase().includes(letter))
    }

    findAnagrams (otherWords) {
        return otherWords.filter(word => this.isAnagram(word))
        // otherWords.every(word => this.isAnagram(word))
        // return otherWords.filter(word => word === this.word)
    }
}

module.exports = AnagramFinder;

