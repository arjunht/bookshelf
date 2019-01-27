import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AddBook from './AddBook'
import Shelf from './Shelf'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => 
        this.setState({
          books
        })
      )
  }

  searchBook = (searchText) => {
    /*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */
    searchText ? (
      BooksAPI.search(searchText, 20)
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
    const bookShelfTitles = ['Currently Reading', 'Want to Read', 'Read']
    return (
      <div className="app">
        <Route path='/addBook' render={() => (
          <AddBook
            books={this.state.books}
            onSearchBook={this.searchBook}
          />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {bookShelfTitles.map((value, index) => (
                  <Shelf
                    key={index}
                    title={value}
                    books={
                      this.state.books.filter(book => 
                        book.shelf === value
                  )}/>
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/addBook'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
