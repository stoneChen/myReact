import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { hideConfirm } from './action';

@connect(state => ({ confirmCfg: state.confirm.toJS() }))
export default class Confirm extends Component {
  constructor () {
    super();
    //this.state = {
    //  show: false
    //};
  }

  //componentWillReceiveProps (nextProps) {
  //  this.setState({
  //    show: nextProps.confirmCfg.show
  //  });
  //}

  hide () {
    this.props.dispatch(hideConfirm());
  }

  onCancel () {
    this.hide();
    this.props.confirmCfg.onCancel();
  }

  onConfirm () {
    this.hide();
    this.props.confirmCfg.onConfirm();
  }

  render () {
    //const { show } = this.state;
    const { content, show } = this.props.confirmCfg;
    return (
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>提示信息</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onCancel.bind(this)}>取消</Button>
          <Button bsStyle="primary" onClick={this.onConfirm.bind(this)}>确认</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  dispatch: PropTypes.func,
  confirmCfg: PropTypes.object
};
