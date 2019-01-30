import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

const Shelf = (props) => {
  
  const { books, onUpdateShelf } = props;
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      {(books !== undefined && books.length > 0) && (
        <div className="bookshelf-books">
          <BookList books={books} onUpdateShelf={(book, readState) => (onUpdateShelf(book, readState))} />
        </div>
      )}
    </div>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array
};

export default Shelf;
