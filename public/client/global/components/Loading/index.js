require('./loading.styl');

import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
  render () {
    const { show } = this.props;
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
  show: PropTypes.bool
};

const mapStateToProps = function (state) {
  return {
    show: state.loading
  };
};

export default connect(mapStateToProps)(Loading);
