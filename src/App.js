import React from 'react'
import './App.css'
import BookLibraryComponent from './components/BookLibraryComponent'
import SearchPage from './pages/SearchPage'
import NotFound from './pages/404'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <BookLibraryComponent></BookLibraryComponent>
              </Route>
              <Route exact path="/search">
                <SearchPage></SearchPage>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default BooksApp
