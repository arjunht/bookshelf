import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = (props) => {
  return (
    <ol className="books-grid">
      {props.books.map((book) => (
        <Book key={book.id} title={book.title} authors={book.authors} />
      ))}
    </ol>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList