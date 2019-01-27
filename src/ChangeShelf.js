import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ChangeShelf extends Component {
  updateShelf = (event) => {
    BooksAPI.update(this.props.book, event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading" onClick={this.updateShelf}>Currently Reading</option>
          <option value="wantToRead" onClick={this.updateShelf}>Want to Read</option>
          <option value="read" onClick={this.updateShelf}>Read</option>
          <option value="none" onClick={this.updateShelf}>None</option>
        </select>
      </div>
    );
  }
}

export default ChangeShelf