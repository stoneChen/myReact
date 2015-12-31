require('./list.styl');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../action';
import { showConfirm } from 'components/Confirm/action';
import Row from '../component/Row';
import log from '../log';

@connect(state => ({ users: state.users.toJS() }),
  dispatch => ({ actions: bindActionCreators(Object.assign({}, userActions, { showConfirm }), dispatch) }))
export default class List extends Component {
  constructor () {
    super();
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps (nextProps) {
    log('List componentWillReceiveProps:', nextProps);
    this.setState({
      loading: !nextProps.users
    });
  }

  componentDidMount () {
    log('List componentDidMount.');
    this.props.actions.asyncGetList();
  }

  componentWillUnmount () {
    log('List componentWillUnmount');
    this.props.actions.clear();
  }

  renderUsers () {
    const { loading } = this.state;
    const { users, actions } = this.props;
    if (users && users.length) {
      return users.map(user =>
        <Row key={user.id}
             user={user}
             actions={actions}/>
      );
    } else {
      return (
        <tr>
          <td colSpan="4">{loading ? 'loading' : 'no users'}</td>
        </tr>
      );
    }
  }

  render () {
    log('List render.');
    return (
      <div className="component-user-list">
        <h3>This is the User List Component.</h3>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>operation</th>
          </tr>
          </thead>
          <tbody>
          {this.renderUsers()}
          </tbody>
        </table>
      </div>
    );
  }
}

List.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array
};

