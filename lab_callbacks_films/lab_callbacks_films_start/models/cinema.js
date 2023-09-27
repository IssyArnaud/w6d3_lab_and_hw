class Cinema{
  constructor(films){
    this.films = films
  }
  getFilmTitles(){
    return this.films.map(film => film.title)
  }
  findFilmByTitle(titleToFind){
    return this.films.find(film => film.title === titleToFind)
  }
  filterByGenre(genreToFilter){
    return this.films.filter(film => film.genre === genreToFilter)
  }
  checkForYear(yearToCheck){
    return this.films.some(film => film.year === yearToCheck)
  }
  checkEveryLengthOver(lengthToCheck){
    return this.films.every(film => film.length > lengthToCheck)
  }
  calculateTotalLength(){
    return this.films.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0
    )
  }
  filterByYear(yearToFilter){
    return this.films.filter(film => film.year === yearToFilter)
  }
  filterByProperty(keyOfProperty, propertyToFilter){
    return this.films.filter(film => film[keyOfProperty] === propertyToFilter)
  }
}

module.exports = Cinema;

