import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookListComponent from './BookListComponent'
import { Link } from 'react-router-dom'
import { shelves } from './constants'
class BookLibraryComponent extends React.Component {

  state = {
    allBooks: undefined,
    currentlyReading: undefined,
    wantToRead: undefined,
    read: undefined
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(res => {
        this.setState(
          {
            allBooks: res,
            currentlyReading: res.filter(b => b.shelf === shelves.currentlyReading[1]),
            wantToRead: res.filter(b => b.shelf === shelves.wantToRead[1]),
            read: res.filter(b => b.shelf === shelves.read[1])
          }
        )
      })
  }

  updateShelfHandler = (event) => {

    let bookToUpdate = this.state.allBooks.filter(book => book.id === event.target.name)[0]
    let newShelf = event.target.value

    BooksAPI.update(bookToUpdate, newShelf)
      .then(res => {
        if (newShelf === 'none') {
          // Remove book from all Lists.
          let allBooks = this.state.allBooks.filter(x => x.id !== bookToUpdate.id)
          this.setState(
            {
              allBooks: allBooks,
              currentlyReading: allBooks.filter(b => b.shelf === shelves.currentlyReading[1]),
              wantToRead: allBooks.filter(b => b.shelf === shelves.wantToRead[1]),
              read: allBooks.filter(b => b.shelf === shelves.read[1])
            }
          )
        } else {
          // Update all lists
          let newReadList = this.state.allBooks.filter(x => (res.currentlyReading.map(x => x).indexOf(x.id) === -1) && (res.wantToRead.map(x => x).indexOf(x.id) === -1))
          let newCurrentlyReadingList = this.state.allBooks.filter(x => (res.read.map(x => x).indexOf(x.id) === -1) && (res.wantToRead.map(x => x).indexOf(x.id) === -1))
          let newWantToReadList = this.state.allBooks.filter(x => (res.currentlyReading.map(x => x).indexOf(x.id) === -1) && (res.read.map(x => x).indexOf(x.id) === -1))
          this.setState(
            {
              currentlyReading: newCurrentlyReadingList,
              wantToRead: newWantToReadList,
              read: newReadList
            }
          )
        }
      }
      )
  }
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div >
            <Link className="open-search" to="/search">
              <button>Add Books</button>
            </Link>
          </div>
          <div className="list-books-content">
            <div>
              <BookListComponent BookList={this.state.currentlyReading} Title={shelves.currentlyReading[0]} ShelfHandler={this.updateShelfHandler}></BookListComponent>
              <BookListComponent BookList={this.state.wantToRead} Title={shelves.wantToRead[0]} ShelfHandler={this.updateShelfHandler}></BookListComponent>
              <BookListComponent BookList={this.state.read} Title={shelves.read[0]} ShelfHandler={this.updateShelfHandler}></BookListComponent>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookLibraryComponent
