require('./detail.styl');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import * as userActions from '../action';
import log from '../log';

@connect(state => ({ user: state.user.toJS() }),
  dispatch => ({ actions: bindActionCreators(Object.assign({}, userActions, { pushState }), dispatch)
  })
)
export default class Detail extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      user: {}
    };
  }

  componentDidMount () {
    const { params } = this.props;
    log('user id:', params.id);
    this.props.actions.asyncGetItem(params.id);
  }

  componentWillReceiveProps (nextProps) {
    const user = nextProps.user;
    log('fetched user:', user);
    if (user) {
      this.setState({
        user
      });
    }
  }

  backToUserList () {
    this.props.actions.pushState(null, '/user-list');
  }

  handleNameChange (e) {
    this.setState({
      user: Object.assign({}, this.state.user, { name: e.target.value })
    });
  }

  handleAgeChange (e) {
    this.setState({
      user: Object.assign({}, this.state.user, { age: e.target.value })
    });
  }

  handleSubmit () {
    this.props.actions.asyncUpdate(this.state.user)
      .then(() => {
        this.backToUserList();
      });
  }

  render () {
    const { user } = this.state;
    return (
      <div className="component-user-detail">
        <h3>This is the User Detail Component.</h3>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-xs-1 control-label">id:</label>
            <div className="col-xs-6">
              <input type="text"
                     className="form-control"
                     value={user.id}
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
                     value={user.name}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-1 control-label">age:</label>
            <div className="col-xs-6">
              <input type="text"
                     className="form-control"
                     onChange={this.handleAgeChange.bind(this)}
                     value={user.age}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-1">
              <button className="btn btn-primary"
                      type="button"
                      onClick={this.handleSubmit.bind(this)}>Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Detail.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object,
  params: PropTypes.object.isRequired
};

