import React from "react";
import BookComponent from "./BookComponent"
function BookListComponent(props) {
  if (props !== null && props !== undefined && props.BookList !== undefined) {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.Title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.BookList.map(function (book, i,) {
              return <BookComponent key={i} Title={book.title} Id={book.id} Shelf={book.shelf} Cover={book.imageLinks.thumbnail} ShelfHandler={props.ShelfHandler}></BookComponent>
            })}
          </ol>
        </div>
      </div>
    )
  }
  return null
}
export default BookListComponent