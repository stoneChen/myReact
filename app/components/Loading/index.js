require('./loading.styl');

import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(state => ({ loadingCfg: state.loading.toJS() }))
export default class Loading extends Component {
  constructor () {
    super();
    this.state = {
      show: false
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      show: nextProps.loadingCfg.show
    });
  }

  render () {
    const { show } = this.state;
    if (!show) {
      return <div></div>;
    }
    return (
      <div className="loading-wrapper">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  loadingCfg: PropTypes.bool
};

