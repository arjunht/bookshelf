import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ChangeShelf extends Component {
  state = {
    value: this.props.book.shelf
  }

  updateShelf = (event) => {
    
    this.setState({
      value: event.target.value
    })
    
    BooksAPI.update(this.props.book, this.state.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.updateShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ChangeShelf