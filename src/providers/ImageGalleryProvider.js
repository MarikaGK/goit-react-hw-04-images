import { emptyQueryNotify } from 'utils/notifications';
import getImages from 'utils/getImages';
import { useEffect } from 'react';

const { createContext, useContext, useState } = require('react');

const ImageGalleryContext = createContext();

export const ImageGalleryProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalURL, setModalURL] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const perPage = 12;

  const handleSearchBar = newQuery => {
    if (!newQuery) {
      return emptyQueryNotify();
    }
    setQuery(newQuery);
    setActualPage(1);
  };

  const onGalleryItemClick = evt => {
    evt.preventDefault();
    const imgURL = evt.target.dataset['src'];
    const imgAlt = evt.target.alt;
    setIsModalOpen(true);
    setModalURL(imgURL);
    setModalAlt(imgAlt);
  };

  const incrementPage = () => {
    setActualPage(prevState => prevState + 1);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    setIsLoading(true);
    getImages(query, images, actualPage, perPage)
      .then(response =>
        {
          setImages(response.images);
          setActualPage(response.actualPage);
          setTotalPages(response.totalPages)
        }
      )
      .catch(_error => {
        setHasError(true);
      })
      .finally(setIsLoading(false));
  
  }, [query, actualPage])

  return (
    <ImageGalleryContext.Provider
      value={{
        query,
        images,
        actualPage,
        totalPages,
        isModalOpen,
        modalURL,
        modalAlt,
        hasError,
        isLoading,
        perPage,
        handleSearchBar,
        onGalleryItemClick,
        incrementPage,
        onModalClose,
      }}
    >
      {children}
    </ImageGalleryContext.Provider>
  );
};

export const useImageGallery = () => useContext(ImageGalleryContext);
