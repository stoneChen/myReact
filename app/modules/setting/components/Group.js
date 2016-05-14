import React, { Component, PropTypes } from 'react'
import Row from './Row'
// import createKey from 'utils/create-key'
// import Immutable from 'immutable'

export default class Group extends Component {
  constructor (props, context) {
    super(props, context);
  }

  componentWillReceiveProps (nextProps) {

  }

  setItem (...args) {
    this.props.ipActions.setItem(args)
  }

  removeItem (...args) {
    this.props.ipActions.removeItem(args)
  }

  addItem (...args) {
    this.props.ipActions.addItem(args)
  }

  render () {
    return (
      <div>
        {
          this.props.ipList.map((ipObj, index) => {
            return (
              <Row key={ ipObj._key } ipObj={ ipObj }
                   index={ index } setItem={ this.setItem.bind(this) }
                   removeItem={ this.removeItem.bind(this) }/>
            )
          })
        }
        <button className="btn btn-default" onClick={ this.addItem.bind(this) }>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <hr/>
        <pre>
          ipList: { global.JSON.stringify(this.props.ipList) }
        </pre>
      </div>
    )
  }
}

Group.propTypes = {
  ipList: PropTypes.array.isRequired,
  ipActions: PropTypes.object.isRequired,
};
