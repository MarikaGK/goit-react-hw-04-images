import { useEffect } from 'react';
import css from './Modal.module.css';
import { useImageGallery } from 'providers/ImageGalleryProvider';

const Modal = () => {
  const { modalURL, modalAlt, onModalClose } = useImageGallery();

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEsc);
    return () => {
      document.removeEventListener('keydown', closeModalOnEsc);
    };
  }, []);

  const closeModalOnEsc = evt => {
    if (evt.key === 'Escape') {
      onModalClose();
    }
  };

  const closeModalOnOverlayClick = evt => {
    if (evt.target.name === evt.currentTarget.name) {
      onModalClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={closeModalOnOverlayClick}>
      <div className={css.Modal}>
        <img src={modalURL} alt={modalAlt} className={css.Image} />
      </div>
    </div>
  );
};

export default Modal;
