import React, { useState } from 'react';

const booksData = [
  { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  // Add more books as needed
];

function BooksList() {
  const [books, setBooks] = useState(booksData);
  const [sortType, setSortType] = useState('title'); // Default sorting by title

  // Function to handle sorting
  const handleSort = (type) => {
    const sortedBooks = [...books].sort((a, b) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1;
      }
      return 0;
    });

    setBooks(sortedBooks);
    setSortType(type);
  };
  setTimeout(()=>{console.log('testing')},500)

  return (
    <div>
      <h2>Books List</h2>
      <button onClick={() => handleSort('title')}>Sort by Title</button>
      <button onClick={() => handleSort('author')}>Sort by Author</button>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title} <br />
            <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
