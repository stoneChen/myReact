require('./detail.scss');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import * as creditActions from '../../action';

class Detail extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    credits: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired
  };

  constructor (props, context) {
    super(props, context);
    const { credits, params } = this.props;
    const creditId = params.id;
    const curCredit = this.curCredit =
      credits.find( c => c.id.toString() === creditId );
    this.state = {
      limit: curCredit.limit,
      expiredDate: curCredit.expiredDate
    };
  }

  backToList () {
    this.props.actions.pushState(null, '/credit-list');
  }

  handleLimitChange (e) {
    this.setState({
      limit: e.target.value
    });
  }

  handleExpiredDateChange (e) {
    this.setState({
      expiredDate: e.target.value
    });
  }

  handleSubmit () {
    this.props.actions.update({
      id: this.curCredit.id,
      limit: this.state.limit,
      expiredDate: this.state.expiredDate
    });
    this.backToList();
  }


  render () {
    return (
      <div className="component-credit-detail">
        <h3>This is the Credit Detail Component.</h3>
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
            <label className="col-xs-1 control-label">limit:</label>
            <div className="col-xs-6">
              <input type="text"
                     className="form-control"
                     onChange={this.handleLimitChange.bind(this)}
                     value={this.state.limit}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-1 control-label">expiredDate:</label>
            <div className="col-xs-6">
              <input type="text"
                     className="form-control"
                     onChange={this.handleExpiredDateChange.bind(this)}
                     value={this.state.expiredDate}/>
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


const mapStateToProps = function (state) {
  return {
    credits: state.credit
  };
};

const mapDispatchToProps = function (dispatch) {
  creditActions.pushState = pushState; //todo 这么做是不是有坑？
  return {
    actions: bindActionCreators(creditActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
