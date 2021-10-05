import React from "react";
import { Link } from 'react-router-dom'

class NotFound extends React.Component {

  render() {
    return (
      <div>
        <h3 className="text-center pt-5">Page not found</h3>
        <p className="text-center">
          <Link to="/">Go to Myreads app</Link>
        </p>
      </div>
    )
  }
}

export default NotFound