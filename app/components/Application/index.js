require('bootstrap/dist/css/bootstrap.css');//引入bootstrap

const FastClick = require('fastclick');//引入fastclick，解决300ms延迟问题
FastClick.attach(document.body);

if (process.env.NODE_ENV === 'development') {//log 全局配置
  window.localStorage.debug = '*';
}

import React, { Component, PropTypes } from 'react';

export default class Application extends Component {

  render () {
    return (
      <div className="application">
        {this.props.children}
      </div>
    );
  }
}

Application.propTypes = {
  children: PropTypes.any
};
