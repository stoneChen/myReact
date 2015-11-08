import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <h3>This is the Home page!!!</h3>
        <Link to="/user-list">go to user-list</Link>
      </div>
    );
  }
}
