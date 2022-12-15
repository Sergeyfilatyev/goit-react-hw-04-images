import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { alt, src } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
