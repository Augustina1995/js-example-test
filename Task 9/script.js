/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Book" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, author, pageCount
Metodas: 
isLong() - jeigu knygos puslapių skaičius bus daugiau nei 500, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

// ANSWER

class Book {
    constructor(title, author, pageCount) {
      this.title = title;
      this.author = author;
      this.pageCount = pageCount;
    }
  
    isLong() {
      return this.pageCount > 500;
    }
  }
  

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 300);
console.log(book1.isLong()); // Output: false

const book2 = new Book('War and Peace', 'Leo Tolstoy', 1225);
console.log(book2.isLong()); // Output: true
