import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  alt,
  onClick,
}) => (
  <li key={id} className={css.ImageGalleryItem}>
    <img
      className={css.ImageGalleryItemImage}
      id={id}
      src={webformatURL}
      data-src={largeImageURL}
      alt={alt}
      onClick={onClick}
    />
  </li>
);
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  alt: PropTypes.string,
  onGalleryItemClick: PropTypes.func,
};
