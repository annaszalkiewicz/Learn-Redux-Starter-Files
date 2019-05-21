import React, { Component } from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;