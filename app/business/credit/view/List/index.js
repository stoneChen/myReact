require('./list.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../action';
import Row from './Row';

class List extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    credits: PropTypes.array.isRequired
  };

  render () {
    const { credits } = this.props;
    return (
      <div className="component-credit-list">
        <h3>This is the Credit List Component.</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>limit</th>
              <th>expiredDate</th>
              <th>operation</th>
            </tr>
          </thead>
          <tbody>
          {
            credits.map( credit =>
                <Row key={credit.id}
                     credit={credit}
                     del={this.props.actions.del} />
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    credits: state.credit
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
