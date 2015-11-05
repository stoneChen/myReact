require('bootstrap/dist/css/bootstrap.min.css')

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Application extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    return (
      <div className="application">
        <Link to="/user-list">user-list</Link>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Application)
