import React from "react";
import BookComponent from "./BookComponent"
import BookLibraryComponent from "./BookLibraryComponent";
// class BookListComponent extends React.Component {
//   state = {
//     ShelfHandler: undefined
//   }
//   componentDidMount() {
//     this.setState({
//       ShelfHandler: this.props.ShelfHandler
//     })
//   }
//   updateShelfHandler = (event) => {
//     console.log(event)
//   }
//   render() {
//     if (this.props.BookList !== null && this.props.BookList !== undefined && this.state.ShelfHandler !== undefined) {
//       console.log(this.state)
//       return (
//         <div className="bookshelf">
//           <h2 className="bookshelf-title">{this.props.Title}</h2>
//           <div className="bookshelf-books">
//             <ol className="books-grid">
//               {this.props.BookList.map(function (book, i,) {
//                 console.log(this.updateShelfHandler)
//                 return <BookComponent key={i} Title={book.title} Shelf={book.shelf} Cover={book.imageLinks.thumbnail}></BookComponent>
//               })}
//             </ol>
//           </div>
//         </div>
//       )
//     } else {
//       return null
//     }

//   }
// }

// export default BookListComponent
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