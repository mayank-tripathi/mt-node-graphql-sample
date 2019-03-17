import React, { Component } from 'react';
import UserComponent from './UserComponent';
import CandidateComponent from './CandidateComponent';
import '../styles/App.css';

class App extends Component {

  render() {

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">mt-node-graphql-sample</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col">
            <UserComponent />
          </div>
          <div className="col">
            <CandidateComponent />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
