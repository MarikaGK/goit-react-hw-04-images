import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  /*handleGalleryItemClick = evt => {
    evt.preventDefault();
    const imgId = evt.target.id.value;
    this.props.onGalleryItemClick(imgId);
  };*/

  render() {
    const { images, query, onClick } = this.props;
    return images.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          id={id}
          src={webformatURL}
          data-src={largeImageURL}
          alt={query}
          onClick={onClick}
        />
      </li>
    ));
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  query: PropTypes.string,
  onGalleryItemClick: PropTypes.func,
};
