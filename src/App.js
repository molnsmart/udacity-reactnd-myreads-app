import React from 'react'
import './App.css'
import BookLibraryComponent from './components/BookLibraryComponent'
import SearchPage from './pages/SearchPage'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <BookLibraryComponent></BookLibraryComponent>
            <Link to="/search">Search</Link>
          </div>
        )}>
        </Route>
        <Route exact path="/search" render={() => (
          <SearchPage></SearchPage>
        )}>
        </Route>
      </div >
    )
  }
}

export default BooksApp
