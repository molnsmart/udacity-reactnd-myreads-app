import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookListComponent from './BookListComponent'

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
        console.log(res)
        this.setState(
          {
            allBooks: res,
            currentlyReading: res.filter(b => b.shelf === 'currentlyReading'),
            wantToRead: res.filter(b => b.shelf === 'wantToRead'),
            read: res.filter(b => b.shelf === 'read')
          }
        )
      })
  }
  updateShelfHandler = (event) => {


    let bookToUpdate = this.state.allBooks.filter(book => book.id === event.target.name)[0]
    let newShelf = event.target.value
    if (newShelf !== 'none') {

      BooksAPI.update(bookToUpdate, newShelf)
        .then(res => {
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
        )
    } else {
      console.log("Option 'None' is not implemented")
    }

  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookListComponent BookList={this.state.currentlyReading} Title="Currently Reading" ShelfHandler={this.updateShelfHandler}></BookListComponent>
            <BookListComponent BookList={this.state.wantToRead} Title="Want To Read" ShelfHandler={this.updateShelfHandler}></BookListComponent>
            <BookListComponent BookList={this.state.read} Title="Read" ShelfHandler={this.updateShelfHandler}></BookListComponent>
          </div>
        </div>
      </div>
    )
  }
}

export default BookLibraryComponent
