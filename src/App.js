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

  render() {
    const bookShelfTitles = ['Currently Reading', 'Want to Read', 'Read']
    return (
      <div className="app">
        <Route path='/addBook' component={AddBook} />
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
                        book.shelf.toLowerCase() === value.replace(/\s/g, '').toLowerCase()
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
