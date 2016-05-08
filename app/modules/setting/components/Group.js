import React, { Component, PropTypes } from 'react'
import Row from './Row'
import createKey from 'utils/create-key'
// import Immutable from 'immutable'

export default class Group extends Component {
  constructor (props, context) {
    super(props, context);
    let list = this.props.ipStr.split(',').map(ip => {
      return {
        _key: createKey(),
        ipStr: ip,
      }
    })
    this.state = {
      ipList: list
      // ipList: Immutable.fromJS(list)
    };
  }

  setItem (index, ipObject) {
    let newList = this.state.ipList.map((ipObj, i) => {
      return i === index ? ipObject : ipObj
    })
    this.setState({
      ipList: newList
    });
    this.props.setStr(newList.map(ipObj => ipObj.ipStr ).join(','))
  }
  
  removeItem (ipObject) {
    this.setState({
      ipList: this.state.ipList.filter(ipObj => {
        return ipObject !== ipObj
      })
    })
    this.props.setStr(this.state.ipList.map(o => o.ipStr).join(','))
  }
  
  addItem () {
    this.setState({
      ipList: [...this.state.ipList, {
        _key: createKey(),
        ipStr: '...'
      }]
    })

  }
  
  render () {
    return (
      <div>
        {
          this.state.ipList.map((ipObj, index) => {
            return (
              <Row key={ ipObj._key } ipObj={ ipObj } 
                   index={ index } setItem={ this.setItem.bind(this) }
                   removeItem={ this.removeItem.bind(this) } />
            )
          })
        }
        <button className="btn btn-default" onClick={ this.addItem.bind(this) }>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <hr/>
        <pre>
          ipList: { global.JSON.stringify(this.state.ipList) }
        </pre>
      </div>
    )
  }
}

Group.propTypes = {
  ipStr: PropTypes.string.isRequired,
  setStr: PropTypes.func.isRequired,
};
