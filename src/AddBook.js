import React, { Component } from 'react';
import BookList from './BookList';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class AddBook extends Component {
  
  state = {
    searchText: '',
    books: []
  };

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
          /*
            For invalid queries, BooksAPI returns an object in books with the following format:
            {error: "empty query", items: Array(0)}
            Therefore added the check for Array and making sure there is atleast one book to display
          */
          Array.isArray(books) && books.length > 0 ?
            this.setState({
              books
            })
          : this.setState({
              books: []
            })
        }))
    : (this.setState({
        books: []
    }))
  };

  render() {
    
    const { books, searchText } = this.state;
    const { currentBooks, onUpdateShelf } = this.props
    
    for(let book of books) {
      for(let currentBook of currentBooks) {
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
              value={searchText}
              onChange={this.searchBook}
            />
          </div>
        </div>
        {(books !== undefined && books.length > 0) && (
          <div className="search-books-results">
            <BookList books={books} onUpdateShelf={(book, readState) => (onUpdateShelf(book, readState))}/>
          </div>
        )}
      </div>
    );
  }
}

export default AddBook;
