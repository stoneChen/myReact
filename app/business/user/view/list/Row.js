import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Row extends Component {
  static propTypes = {
    del: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  handleDel () {
    debugger;
    this.props.del(this.props.user.id);
  }

  render () {
    const { user } = this.props;
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>
          <Link className="btn btn-default btn-xs"
                to={`/user-detail/${user.id}`}>edit</Link>&nbsp;
          <button className="btn btn-danger btn-xs"
                  onClick={this.handleDel.bind(this)}>delete</button>
        </td>
      </tr>
    );
  }
}

export default Row;
