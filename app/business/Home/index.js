import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <h3>This is the Home page. Here is the menu:</h3>
        <ul>
          <li>
            <Link to="/user-list">go to user-list</Link>
          </li>
          <li>
            <Link to="/credit-list">go to credit-list</Link>
          </li>
        </ul>
      </div>
    );
  }
}
