import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingActions from '../action'
import Group from '../components/Group'
import createKey from 'utils/create-key'

@connect(state => ({ setting: state.setting.toJS() }),
  dispatch => ({ actions: bindActionCreators(settingActions, dispatch)})
)
export default class Setting extends React.Component {
  constructor (props, context) {
    super(props, context);
    let list = this.props.setting.ipStr.split(',').map(ip => {
      return {
        _key: createKey(),
        ipStr: ip,
      }
    });
    this.state = {
      ipList: list
      // ipList: Immutable.fromJS(list)
    };
  }

  componentWillMount () {
    this.ipActions = {
      setItem: this.setItem.bind(this),
      removeItem: this.removeItem.bind(this),
      addItem: this.addItem.bind(this),
    }
  }

  setSetting (str) {
    this.props.actions.setSetting({
      ipStr: str,
    })
  }

  setItem ([index, ipObject]) {
    let newList = this.state.ipList.map((ipObj, i) => {
      return i === index ? ipObject : ipObj
    });
    this.setState({
      ipList: newList
    });
  }

  removeItem ([ipObject]) {
    this.setState({
      ipList: this.state.ipList.filter(ipObj => {
        return ipObject !== ipObj
      })
    })
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
        <Group ipList={ this.state.ipList } ipActions={ this.ipActions } />
        <p>result:</p>
        <p>{ this.state.ipList.map(ipObj => ipObj.ipStr).join()}</p>
      </div>
    );
  }
}

Setting.propTypes = {
  setting: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
