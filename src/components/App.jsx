import '../styles.css';
import { errorOccured } from '../utils/notifications';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { useImageGallery } from 'providers/ImageGalleryProvider';

const App = () => {
  const { isLoading, hasError, actualPage, totalPages, images, isModalOpen } =
    useImageGallery();

  return (
    <>
      <SearchBar />
      {isLoading && <Loader />}
      {!hasError ? <ImageGallery /> : errorOccured()}
      {actualPage !== totalPages && images.length > 0 && !isLoading ? (
        <Button />
      ) : null}
      {isModalOpen && <Modal />}
    </>
  );
};

export default App;
