require('bootstrap/dist/css/bootstrap.min.css');
const FastClick = require('fastclick');
FastClick.attach(document.body);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Application extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    return (
      <div className="application">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(Application);
