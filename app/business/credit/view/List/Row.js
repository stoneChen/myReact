import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Row extends Component {
  handleDel () {
    debugger;
    this.props.del(this.props.credit.id);
  }

  render () {
    const { credit } = this.props;
    return (
      <tr key={credit.id}>
        <td>{credit.id}</td>
        <td>{credit.limit}</td>
        <td>{credit.expiredDate}</td>
        <td>
          <Link className="btn btn-default btn-xs"
                to={`/credit-detail/${credit.id}`}>edit</Link>&nbsp;
          <button className="btn btn-danger btn-xs"
                  onClick={this.handleDel.bind(this)}>delete</button>
        </td>
      </tr>
    );
  }
}

Row.propTypes = {
  del: PropTypes.func.isRequired,
  credit: PropTypes.object.isRequired
};

export default Row;
