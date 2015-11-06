require('./list.less');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class List extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render () {
    const { users } = this.props;
    return (
      <div className="component-user-list">
        This is the User List Component.
        <ul>
          {
            users.map( user =>
                <li key={user.id}>
                  <Link to={`/user-detail/${user.id}`}>{user.name}</Link>
                </li>
            )
          }
        </ul>
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

export default connect(mapStateToProps)(List);
