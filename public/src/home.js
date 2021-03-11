// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const getTotalBooksCount = books => books.reduce((bkTotal, what) => {
  
    if (what[0] === undefined) bkTotal++
    return bkTotal
  }, 0)

function getTotalAccountsCount(accounts) {

  return accounts.length;

}

function getBooksBorrowedCount(books) {

  let zero = 0;

  books.forEach((what) => {
    what.borrows.forEach((huh) => {
      if (huh.returned === false) {
        zero = zero + 1;
      }
    })
  })

  return zero

}

/*
  'Historical Fiction',
  'Travel',
  'Young Adult',
  'Nonfiction',
  'Classics',
  'Science'
*/

function getMostCommonGenres(books) {

  const gen = books.map(what => what.genre)

  let hCount = 0;
  let sCount = 0;
  let cCount = 0;
  let tCount = 0;
  let yCount = 0;
  let nCount = 0;

  gen.forEach((huh) => {
    if (huh === "Historical Fiction") hCount+= 1;
    if (huh === "Science") sCount+= 1;
    if (huh === "Classics") cCount+= 1;
    if (huh === "Travel") tCount+= 1;
    if (huh === "Young Adult") yCount+= 1;
    if (huh === "Nonfiction") nCount+= 1;
  })

  let tung = [
    { name: "Historical Fiction", count: hCount },
    { name: "Science", count: sCount },
    { name: "Classics", count: cCount },
    { name: "Travel", count: tCount },
    { name: "Young Adult", count: yCount },
    { name: "Nonfiction", count: nCount }    
  ];

  tung.sort((a, b) => b.count - a.count)

  return tung.slice(0, 5)

}

function getMostPopularBooks(books) {

  let tung = [];

  for (let i = 0; i<books.length; i ++) {
    let what = {};
    what.name = books[i].title
    what.count = books[i].borrows.length
    tung.push(what)
  }

  tung.sort((a, b) => b.count - a.count);

  return tung.slice(0, 5);

}

function getMostPopularAuthors(books, authors) {

  let tung = [];

  let zero = 0;

  for (let i = 0; i<authors.length; i++) {

    let what = {}

    what.name = `${authors[i].name.first} ${authors[i].name.last}`

    for (let j = 0; j<books.length; j++) {

      if (books[j].authorId === authors[i].id) {
        zero = books[j].borrows.length;
        what.count = zero
      }

    }

    tung.push(what)

  }

  tung.sort((a, b) => b.count - a.count);

  return tung.slice(0, 5)
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
