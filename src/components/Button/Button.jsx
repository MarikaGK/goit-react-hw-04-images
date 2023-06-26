import css from './Button.module.css';
import { useImageGallery } from 'providers/ImageGalleryProvider';

const Button = () => {
  const { incrementPage } = useImageGallery();

  return (
    <div className={css.ButtonWrapper}>
      <button type="button" className={css.Button} onClick={incrementPage}>
        Load more
      </button>
    </div>
  );
};

export default Button;
