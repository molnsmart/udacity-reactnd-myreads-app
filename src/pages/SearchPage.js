import React from "react";
import { Link } from 'react-router-dom'
import * as BooksApi from '../BooksAPI'
import BookListComponent from '../components/BookListComponent'
class SearchPage extends React.Component {
  state = {
    query: "",
    searchResult: undefined,
    searchResultEmpty: false
  }

  searchHandler = (event) => {
    let query = event.target.value
    this.queryBookApi(query)

  }
  updateShelfHandler = (event) => {

    let bookToUpdate = this.state.searchResult.filter(book => book.id === event.target.name)[0]
    let newShelf = event.target.value
    BooksApi.update(bookToUpdate, newShelf)
      .then(res => {
        // Todo: Implement toast/dialog indicated book was added/removed from lists.
      }
      ).catch(error => {
        console.log("API Error response")
        console.log(error)
      })


  }
  queryBookApi(searchQuery) {
    BooksApi.search(searchQuery)
      .then(res => {
        if (res.error !== 'empty query') {
          this.setState(
            {
              query: searchQuery,
              searchResult: res,
              searchResultEmpty: false
            }
          )
        } else {
          this.setState(
            {
              query: searchQuery,
              searchResult: undefined,
              searchResultEmpty: true
            }
          )
        }
      }).catch(error => {
        console.log("API Error response")
        console.log(error)
      })
  }
  render() {
    if (this.state.searchResultEmpty) {
      return (
        <div>
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchHandler} />
              </div>
            </div>
            <div className="search-books-results">
              <p>Found no books with searchTerm: '{this.state.query}' </p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={this.searchHandler} />
            </div>
          </div>
          <div className="search-books-results">
            <BookListComponent BookList={this.state.searchResult} Title={"Search Result for: " + this.state.query} ShelfHandler={this.updateShelfHandler}></BookListComponent>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage