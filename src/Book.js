import React from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf'

const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
          <ChangeShelf book={props.book} />
        </div>
        <div className="book-title">{props.book.title}</div>
        {(props.book.authors !== undefined && props.book.authors.length > 0) && (
          <div className="book-authors">
            {props.book.authors.map((author, index) => (
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

export default Book