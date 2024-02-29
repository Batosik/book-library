import _ from 'lodash'
const books = []

const addBook = (name, author, year, genre, pages ) => {
  const book = { name, author, year, genre, pages };
  books.push(book);
}

const findBooksByAuthor = (author) => {
  return books.filter((book) => book.author === author);
};

const filterBooksByGenre = (genre) => {
  return books.filter((book) => book.genre === genre);
};
const removeBook = (name) => {
  return _.remove(books, (book) => {return book.name === name})
};
const averagePagesReport = () => {
  return Math.ceil(books.reduce((acc, book) => acc += book.pages / books.length, 0))
}
const genreReport = () => {
  const genres = books.map((book) => book.genre);
  return _.countBy(genres);
}

const sortBook = () => {
  const sorted = books.sort((book1, book2) => book2.year - book1.year)
  return sorted
}

addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310); 
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223); 
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);
console.log(books)
console.log('Поиск книг по автору');
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
console.log('Фильтрация книг по жанру')
console.log(filterBooksByGenre("Фэнтези"))
console.log(' Генерация отчета по количеству книг каждого жанра');
console.log(genreReport());
console.log('Генерация отчета по среднему количеству страниц');
console.log(`Среднее количество страниц: ${averagePagesReport()}`);
console.log('Сортировка')
console.log(sortBook())
removeBook("1984");
console.log(books)



