import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  return (
    <ol className="books-grid">
      {props.books.map((book) => (
        (book.hasOwnProperty('imageLinks') && book.imageLinks.hasOwnProperty('thumbnail')) && (
          <Book key={book.id} book={book} onUpdateShelf={(book, readState) => (props.onUpdateShelf(book, readState))} />
        )
      ))}
    </ol>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
