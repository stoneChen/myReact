import './row.styl'
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Row extends Component {
  constructor (props, context) {
    super(props, context);
    console.log('Row constructor')
    this.state = {
      parts: this.props.ipObj.ipStr.split('.'),
      isDirty: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    // console.log('Row componentWillReceiveProps:', nextProps)
    this.setState({
      parts: nextProps.ipObj.ipStr.split('.')
    })
  }
  
  change (idx, value) {
    if (!this.state.isDirty) {// 减少render
      this.setState({
        isDirty: true,
      })
    }

    let newParts = this.state.parts.map((p, i) => {
      return i === idx ? value : p
    })
    this.props.setItem(this.props.index, {
      _key: this.props.ipObj._key,
      ipStr: newParts.join('.'),
    })
  }
  
  remove () {
    this.props.removeItem(this.props.ipObj)
  }
  
  getClassName () {
    return classnames('row clearfix', {
      'has-errors': this.state.parts.some(part => {
        if (!/^[0-9]*$/.test(part)) {
          return true
        }
        part = Number.parseInt(part, 10)// 4gg 这种字符串会被转换成数字4
        return (!Number.isInteger(part) || part < 0 || part > 255)
      }),
      'is-dirty': this.state.isDirty
    })
  }
  
  render () {
    return (
      <div className={ this.getClassName() } >
        {
          this.state.parts.map((part, idx) =>
            <div key={ idx } className="col-xs-2">
              <input type="text" className="form-control" value={ part }
                     maxLength="3" onChange={ (e) => { this.change(idx, e.target.value )} } />
            </div>
          )
        }
        <div className="col-xs-1">
          <button className="btn btn-danger" onClick={ this.remove.bind(this) }>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
        <div className="error-explain">请输入正确的ip</div>
      </div>
    )
  }
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  ipObj: PropTypes.object.isRequired,
  setItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};
