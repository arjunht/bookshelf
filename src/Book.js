import React from 'react';
import PropTypes from 'prop-types';
import ChangeShelf from './ChangeShelf';

const Book = (props) => {
  const { book, onUpdateShelf } = props;
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <ChangeShelf book={book} onUpdateShelf={(book, readState) => (onUpdateShelf(book, readState))} />
        </div>
        <div className="book-title">{book.title}</div>
        {(book.authors !== undefined && book.authors.length > 0) && (
          <div className="book-authors">
            {book.authors.map((author, index) => (
              index > 0 ? `, ${author}` : author
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
