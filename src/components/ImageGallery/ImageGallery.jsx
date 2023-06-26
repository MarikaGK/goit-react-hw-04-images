import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { useImageGallery } from 'providers/ImageGalleryProvider';

const ImageGallery = () => {
  
const { images, query, onGalleryItemClick } = useImageGallery();

  return (
  <ul className={css.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        alt={query}
        onClick={onGalleryItemClick}
      />
    ))}
  </ul>
)};

export default ImageGallery;
