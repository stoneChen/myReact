import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import confirm from 'utils/confirm';
import { Button } from 'react-bootstrap';

class Row extends Component {
  constructor () {
    super();
    this.state = {
      showConfirm: false
    };
  }

  showConfirm () {
    const user = this.props.user;
    this.props.actions.showConfirm({
      content: `确定删除 [${user.name}] 吗?`,
      onConfirm: () => {
        this.handleDel();
      }
    });
  }

  handleDel () {
    //this.hideConfirm();
    this.props.actions.del(this.props.user.id);
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
          <Button bsStyle="danger" bsSize="xsmall" onClick={this.showConfirm.bind(this)}>delete</Button>

        </td>
      </tr>
    );
  }
}

Row.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Row;
