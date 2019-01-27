import React from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf'

const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
          <ChangeShelf book={props.book} />
        </div>
        <div className="book-title">{props.title}</div>
        {(props.authors !== undefined && props.authors.length > 0) && (
          <div className="book-authors">
            {props.authors.map((author, index) => (
              index > 0 ? `, ${author}` : author
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array
};

export default Book