import React from "react";

class BookComponent extends React.Component {

  render() {
    if (this.props !== null) {
      return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.Cover})` }}></div>
            <div className="book-shelf-changer">
              <select name={this.props.Id} value={this.props.Shelf} onChange={this.props.ShelfHandler}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.Title}</div>
          <div className="book-authors">{this.props.Authors}</div>
        </div >
      )
    } else {
      return null
    }
  }
}

export default BookComponent