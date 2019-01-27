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
    this.state.searchText !== '' ? (
      BooksAPI.search(this.state.searchText, 20)
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
            <BookList books={this.state.books}/>
          </div>
        )}
      </div>
    );
  }
}

export default AddBook