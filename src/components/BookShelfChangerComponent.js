import React from "react";

class BookShelfChangerComponent extends React.Component {
  state = {
    shelf: undefined
  }


  componentDidMount() {
    this.setState(
      {
        shelf: this.props.Shelf
      }
    )
  }


  render() {
    return (
      <div className="book-shelf-changer">
        <select name={this.props.Shelf} value={this.props.Shelf} onChange={this.props.ShelfHandler}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead" defaultValue="selected">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChangerComponent