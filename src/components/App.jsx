import React, { Component } from 'react';
import '../styles.css';
import { emptyQueryNotify, errorOccured } from '../utils/notifications';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import getImages from 'utils/getImages';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    query: '',
    images: [],
    actualPage: 1,
    totalPages: 1,
    perPage: 12,
    isModalOpen: false,
    modalURL: '',
    hasError: false,
    isLoading: false,
  };

  componentDidCatch(error, info) {
    console.log(error);
    this.setState({ hasError: true });
  }

  handleSearchBar = ({ query }) => {
    if (!query) {
      return emptyQueryNotify();
    }
    this.setState(prevState => ({ ...prevState, query, actualPage: 1 }));
  };

  onGalleryItemClick = evt => {
    evt.preventDefault();
    const imgURL = evt.target.dataset['src'];
    this.setState({ isModalOpen: true, modalURL: imgURL });
  };

  incrementPage = () => {
    this.setState(prevState => ({
      actualPage: prevState.actualPage + 1,
    }));
  };

  closeModalOnEsc = evt => {
    if (evt.key === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  closeModalOnOverlayClick = evt => {
    if (evt.target.name !== 'img') {
      this.setState({ isModalOpen: false });
    }
  };

  async componentDidUpdate(_prevProps, prevState) {
    const { query, actualPage, images, perPage } = this.state;
    if (prevState.query !== query || prevState.actualPage !== actualPage) {
      this.setState({ isLoading: true });
      getImages(query, images, actualPage, perPage)
        .then(response =>
          this.setState({
            images: response.images,
            actualPage: response.actualPage,
            totalPages: response.totalPages,
          })
        )
        .catch(_error => {
          this.setState({ hasError: true });
        })
        .finally(this.setState({ isLoading: false }));
    }
  }

  render() {
    const {
      query,
      images,
      actualPage,
      totalPages,
      modalURL,
      isModalOpen,
      isLoading,
      hasError,
    } = this.state;
    return (
      <>
        <SearchBar onNewQuery={this.handleSearchBar} />
        <ImageGallery>
          {isLoading && <Loader />}
          {!hasError ? (
            <ImageGalleryItem
              images={images}
              onClick={this.onGalleryItemClick}
            />
          ) : (
            errorOccured()
          )}
        </ImageGallery>
        {actualPage !== totalPages && images.length > 0 && !isLoading ? (
          <Button onClick={this.incrementPage} />
        ) : null}
        {isModalOpen && (
          <Modal
            imgSrc={modalURL}
            alt={query}
            closeModalOnEsc={this.closeModalOnEsc}
            closeModalOnOverlayClick={this.closeModalOnOverlayClick}
          />
        )}
      </>
    );
  }
}

export default App;
