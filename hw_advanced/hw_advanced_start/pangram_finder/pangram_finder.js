class PangramFinder{
  constructor(phrase) {
    this.phrase = phrase
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('')
  }

  toLowerCase(){
    return this.phrase.map(word => word.toLowerCase())
}

  isPangram(){
    return this.alphabet.every(letter => this.phrase.toLowerCase().includes(letter))
  }
}

module.exports = PangramFinder;
