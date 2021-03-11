// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {

  for (let what in authors) {
    if(authors[what].id === id) {
      return authors[what]
    }
  }

}

function findBookById(books, id) {

for (let who in books) {
  if(books[who].id === id) {
    return books[who]
  }
}

}

function partitionBooksByBorrowedStatus(books) {

  const trueBook = [];
  const falseBook = [];
  bothArrays = [falseBook, trueBook]

  books.forEach(book => {
    book.borrows[0].returned ? trueBook.push(book) : falseBook.push(book)
  })

  return bothArrays

}

const getBorrowersForBook = (book, accounts) => {

let tung = [];

  accounts.forEach(account => {
    book.borrows.forEach(copy => {
      if(copy.id === account.id) {
        let accObj = {...account}
        accObj.returned = copy.returned
        tung.push(accObj)
      }
    })
  })
  
  return tung.slice(0 , 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
