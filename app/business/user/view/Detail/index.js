require('./detail.scss');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import * as userActions from '../../action';
import log from '../../log';
//import log from 'util/debug';


class Detail extends React.Component {
  constructor (props, context) {
    super(props, context);
    const { users, params } = this.props;
    const userId = params.id;
    const curUser = this.curUser =
      users.find( u => u.id.toString() === userId );
    this.state = {
      name: curUser.name,
      age: curUser.age
    };
    log('constructor');
  }

  backToUserList () {
    this.props.actions.pushState(null, '/user-list');
  }

  handleNameChange (e) {
    this.setState({
      name: e.target.value
    });
  }

  handleAgeChange (e) {
    this.setState({
      age: e.target.value
    });
  }

  handleSubmit () {
    this.props.actions.update({
      id: this.curUser.id,
      name: this.state.name,
      age: this.state.age
    });
    this.backToUserList();
  }

  handleDel () {
    this.props.actions.del(this.curUser.id);
    this.backToUserList();
  }

  render () {
    return (
      <div className="component-user-detail">
        <h3>This is the User Detail Component.</h3>
        <form  className="form-horizontal">
          <div className="form-group">
            <label className="col-xs-1 control-label">id:</label>
            <div className="col-xs-6">
              <input type="text"
                     className="form-control"
                     value={this.props.params.id}
                     readOnly
                />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-1 control-label">name:</label>
            <div className="col-xs-6">
              <input type="text"
                     className="form-control"
                     onChange={this.handleNameChange.bind(this)}
                     value={this.state.name}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-1 control-label">age:</label>
            <div className="col-xs-6">
              <input type="text"
                     className="form-control"
                     onChange={this.handleAgeChange.bind(this)}
                     value={this.state.age}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-1">
              <button className="btn btn-primary"
                      type="button"
                      onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Detail.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

const mapStateToProps = function (state) {
  return {
    users: state.user
  };
};

const mapDispatchToProps = function (dispatch) {
  userActions.pushState = pushState; //todo 这么做是不是有坑？
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
