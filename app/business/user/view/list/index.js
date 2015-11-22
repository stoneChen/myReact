require('./list.scss');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../action';
import Row from './Row';
import log from '../../log';

class List extends Component {
  constructor () {
    super();
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps (nextProps) {
    log('List componentWillReceiveProps:', nextProps);
    this.setState({
      loading: !!nextProps.users
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
    const { users } = this.props;
    if (users && users.length) {
      return users.map(user =>
          <Row key={user.id}
               user={user}
               del={this.props.actions.del}/>
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

const mapStateToProps = function (state) {
  log('mapStateToProps:', state);
  return {
    users: state.users
  };
};

const mapDispatchToProps = function (dispatch) {
  log('mapDispatchToProps');
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
