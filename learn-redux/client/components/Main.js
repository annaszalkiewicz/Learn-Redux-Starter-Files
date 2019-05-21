import React, { Component } from "react";
import { Link } from "react-router";
import PhotoGrid from "./PhotoGrid";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <PhotoGrid />
      </React.Fragment>
    );
  }
}

export default Main;