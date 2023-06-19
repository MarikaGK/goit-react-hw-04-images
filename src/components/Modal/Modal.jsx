import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModalOnEsc)}

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalOnEsc);
  }

  closeModalOnEsc = evt => {
    if (evt.key === 'Escape') {
      this.props.onModalClose();
    }
  };

  closeModalOnOverlayClick = evt => {
    if (evt.target.name === evt.currentTarget.name) {
      this.props.onModalClose();
    }
  };

  render() {
    const { imgSrc, alt } = this.props;

    return (
      <div className={css.Overlay} onClick={this.closeModalOnOverlayClick}>
        <div className={css.Modal}>
          <img src={imgSrc} alt={alt} className={css.Image} />
        </div>
      </div>
    );
  }
}

export default Modal;
