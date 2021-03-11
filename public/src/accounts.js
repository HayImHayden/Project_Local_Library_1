// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const findAccountById = (accounts, id) => accounts.find(what => what.id === id)

const sortAccountsByLastName = (accounts) => 
accounts.sort((lastNameA, lastNameB) => {
  return lastNameA.name.last > lastNameB.name.last ? 1 : -1
})

function getTotalNumberOfBorrows(account, books) {

  let result = books.reduce((borrowCount, book) => {

    book.borrows.filter(bookID => {if(bookID.id === account.id) borrowCount+= 1 })
    return borrowCount
  }, 0)
 
  return result

}

function getBooksPossessedByAccount(account, books, authors) {

let tung = [];

let tong = [];

let auth = [];

for (let i = 0; i < books.length; i++) {
    
  for (let j = 0; j < books[i].borrows.length; j++) {

    if (account.id === books[i].borrows[j].id &&
        books[i].borrows[j].returned === false) {
      
      tung.push(books[i]);

    }

  }

}

for (let c = 0; c < authors.length; c++) {

  for (let w = 0; w < tung.length; w++) {

    if (authors[c].id === tung[w].authorId) {
      
      tong.push(tung[w])
      auth.push(authors[c])
      
    }

  }

}

let answer = {}

for (let z = 0; z < tong.length; z++) {
  const {id, title, genre, borrows} = tong[z]

  answer = {
    "id": id,
    "title": title,
    "genre": genre,
    "author": auth[z],
    "borrows": borrows,
  }
}

return [answer]
  
}function getBooksPossessedByAccount(account, books, authors) {

let tung = [];

let tong = [];

let auth = [];

for (let i = 0; i < books.length; i++) {
    
  for (let j = 0; j < books[i].borrows.length; j++) {

    if (account.id === books[i].borrows[j].id &&
        books[i].borrows[j].returned === false) {
      
      tung.push(books[i]);

    }

  }

}

for (let c = 0; c < authors.length; c++) {

  for (let w = 0; w < tung.length; w++) {

    if (authors[c].id === tung[w].authorId) {
      
      tong.push(tung[w])
      auth.push(authors[c])
      
    }

  }

}

let answer = {}

for (let z = 0; z < tong.length; z++) {
  const {id, title, genre, borrows} = tong[z]

  answer = {
    "id": id,
    "title": title,
    "genre": genre,
    "author": auth[z],
    "borrows": borrows,
  }
}

return [answer]
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
