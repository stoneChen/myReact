import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingActions from '../action'
import Group from '../components/Group'

@connect(state => ({ setting: state.setting.toJS() }),
  dispatch => ({ actions: bindActionCreators(settingActions, dispatch)})
)
export default class Setting extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      setting: this.props.setting
    };
  }
  
  setSetting (str) {
    this.props.actions.setSetting({
      ipStr: str,
    })
  }
  
  setIpStr (str) {
    this.setState({
      setting: str,
    })
  }
  
  render () {
    return (
      <div>
        <Group ipStr={ this.props.setting.ipStr } setStr={ this.setIpStr.bind(this) } />
        <p>result:</p>
        <p>{this.setting}</p>
      </div>
    );
  }
}

Setting.propTypes = {
  setting: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
