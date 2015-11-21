require('./list.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../action';
import Row from './Row';

class List extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
  };

  componentDidMount () {
    this.props.actions.fetchUsers();
  }

  renderUsers () {
    const { users } = this.props;
    if (users.length) {
      return users.map( user =>
          <Row key={user.id}
               user={user}
               del={this.props.actions.del} />
      );
    } else {
      return (
        <tr>
          <td colSpan="4">no users</td>
        </tr>
      );
    }
  }

  render () {

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

// Uncomment properties you need
// UsersComponent.propTypes = {};
// UsersComponent.defaultProps = {};

const mapStateToProps = function (state) {
  return {
    users: state.user
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
