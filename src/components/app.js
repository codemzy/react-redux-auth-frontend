import React, { Component } from 'react';

// components
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
