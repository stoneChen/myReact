import React,{ Component, PropTypes } from 'react';
import classnames from 'classnames';
export default class Confirm extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
  };

  constructor () {
    super();
    this.state = {
      show: true
    };
    setTimeout(() => {
      this.setState({
        animateIn: true
      });
    }, 0);
  }

  onCancel () {
    this.setState({
      animateIn: false
    });
    this.props.onCancel('CANCELED');
  }

  onConfirm () {
    this.setState({
      animateIn: false
    });
    this.props.onConfirm();
  }

  render () {
    if (!this.state.show) {
      return <div />;
    }
    const animateClassName = this.state.animateIn ? 'in' : '';
    return (
      <div>
        <div className={classnames('modal-backdrop', 'fade', animateClassName)} ></div>
        <div className={classnames('modal', 'fade', animateClassName)} style={{ display: 'block' }} >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={this.onCancel.bind(this)}><span>×</span></button>
                <h4 className="modal-title" >确认提示</h4>
              </div>
              <div className="modal-body">
                {this.props.content}
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
