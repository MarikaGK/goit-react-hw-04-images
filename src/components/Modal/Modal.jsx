import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.closeModalOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.closeModalOnEsc);
  }

  render() {
    const { imgSrc, alt, closeModalOnOverlayClick } = this.props;

    return (
      <div className={css.Overlay} onClick={closeModalOnOverlayClick}>
        <div className={css.Modal}>
          <img src={imgSrc} alt={alt} className={css.Image} />
        </div>
      </div>
    );
  }
}

export default Modal;
