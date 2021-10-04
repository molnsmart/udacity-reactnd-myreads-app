import React from "react";
import BookShelfChangerComponent from "./BookShelfChangerComponent";

class BookComponent extends React.Component {
  state = {
    title: ''
  }


  componentDidMount() {
    this.setState(
      {
        title: this.props.Title,
        authors: this.props.Authors,
        cover: this.props.Cover,
        shelf: this.props.Shelf
      }
    )
  }
  bookShelfChangerHandler = (event) => {
    this.setState({ shelf: event.target.value });
  }
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.state.cover})` }}></div>
          <BookShelfChangerComponent Shelf={this.state.shelf} ShelfHandler={this.bookShelfChangerHandler}></BookShelfChangerComponent>
        </div>
        <div className="book-title">{this.state.title}</div>
        <div className="book-authors">{this.state.authors}</div>
      </div >
    )
  }
}

export default BookComponent