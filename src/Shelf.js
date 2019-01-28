import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      {(props.books !== undefined && props.books.length > 0) && (
        <div className="bookshelf-books">
          <BookList books={props.books} onUpdateShelf={(book, readState) => (props.onUpdateShelf(book, readState))} />
        </div>
      )}
    </div>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array
}

export default Shelf