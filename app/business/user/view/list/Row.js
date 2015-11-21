import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import confirm from 'util/confirm';

class Row extends Component {
  handleDel () {
    confirm(`确定删除[${this.props.user.name}]吗？`)
      .then(() => {
        this.props.del(this.props.user.id);
      }
    );
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
                  onClick={this.handleDel.bind(this)}>delete
          </button>
        </td>
      </tr>
    );
  }
}

Row.propTypes = {
  del: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default Row;
