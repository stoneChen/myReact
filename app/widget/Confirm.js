import React,{ Component, PropTypes } from 'react';

export default class Confirm extends Component {
  static propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
  };

  constructor () {
    super();
    this.state = {
      show: true
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      show: nextProps.show
    });
  }

  getDefaultProps () {

  }

  onCancel () {
    this.setState({
      show: false
    });
    this.props.onCancel();
  }

  onConfirm () {
    this.setState({
      show: false
    });
    this.props.onConfirm();
  }

  render () {
    if (!this.state.show) {
      return <div />;
    }
    return (
      <div>
        <div className="modal-backdrop fade in" ></div>
        <div className="modal fade bs-example-modal-sm in" style={{ display: 'block' }} >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close"><span>×</span></button>
                <h4 className="modal-title" id="mySmallModalLabel">Small modal</h4>
              </div>
              <div className="modal-body">
                hahahaha
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.onCancel.bind(this)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={this.onConfirm.bind(this)}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
