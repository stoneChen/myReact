require('bootstrap/dist/css/bootstrap.min.css');//引入bootstrap

const FastClick = require('fastclick');//引入fastclick，解决300ms延迟问题
FastClick.attach(document.body);

if (process.env.NODE_ENV === 'development') {//log 全局配置
  window.localStorage.debug = '*';
}

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
