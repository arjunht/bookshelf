import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AddBook from './AddBook'
import Shelf from './Shelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  searchBook = (searchText) => {
    /*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */
    
    BooksAPI.search(searchText, 20)
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  render() {
    const bookShelfTitles = ['Currently Reading', 'Want to Read', 'Read']
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <AddBook books={this.state.books} onSearchBook={this.searchBook} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {bookShelfTitles.map((value, index) => (
                  <Shelf key={index} title={value} books={this.state.books} />
                ))}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
