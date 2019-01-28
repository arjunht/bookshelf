import React, { Component } from 'react'
import BookList from './BookList'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {
  
  state = {
    searchText: '',
    books: []
  }

  searchBook = (event) => {    
    this.setState({
      searchText: event.target.value
    })
    
    /*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */
    event.target.value !== '' ? (
      BooksAPI.search(event.target.value, 20)
        .then((books) => {
          this.setState({
            books
          })
        }))
    : (this.setState({
        books: []
    }))
  }

  render() {
    
    for(let book of this.state.books) {
      for(let currentBook of this.props.currentBooks) {
        if(book.id === currentBook.id) {
          book.shelf = currentBook.shelf
          break;
        }
      }
    }
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchText}
              onChange={this.searchBook}
            />
          </div>
        </div>
        {(this.state.books !== undefined && this.state.books.length > 0) && (
          <div className="search-books-results">
            <BookList books={this.state.books} onUpdateShelf={(book, readState) => (this.props.onUpdateShelf(book, readState))}/>
          </div>
        )}
      </div>
    );
  }
}

export default AddBook