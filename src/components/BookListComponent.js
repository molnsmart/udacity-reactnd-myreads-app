import React from "react";
import BookComponent from "./BookComponent"
class BookListComponent extends React.Component {
  state = {
  }


  componentDidMount() {
    this.setState(
      {
        Title: this.props.Title,
        BookList: this.props.BookList
      }
    )
  }

  render() {
    if (this.props.BookList !== null && this.props.BookList !== undefined) {
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.state.Title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.BookList.map(function (book, i) {
                return <BookComponent key={i} Title={book.title} Shelf={book.Shelf} Cover={book.imageLinks.thumbnail}></BookComponent>
              })}
            </ol>
          </div>
        </div>
      )
    } else {
      return null
    }

  }
}

export default BookListComponent