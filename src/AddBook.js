import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class AddBook extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBook: PropTypes.func.isRequired
  }
  
  state = {
    searchText: ''
  }

  searchBook = (event) => {    
    this.setState({
      searchText: event.target.value
    })
    
    this.props.onSearchBook(this.state.searchText)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search">Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchText}
              onChange={this.searchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.props.books}/>
        </div>
      </div>
    );
  }
}

export default AddBook