import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
// import Clock from './components/Clock';
import imageAPI from './services/images-api';
import Button from './components/Button';
import Loading from './components/Loader';
import Modal from './components/Modal';
import Notification from './components/Notification';
import './App.scss';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isLoading: false,
    showModal: false,
    modalImage: '',
    modalImageAlt: '',
    error: null,
  };

  scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuerry = prevState.searchQuery;
    const nextSearchQuerry = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextpage = this.state.page;
    const prevImages = prevState.images;
    const prevmodalImage = prevState.modalImage;
    const nextmodalImage = this.state.modalImage;
    const prevShowModal = prevState.showModal;
    const nextshowModal = this.state.showModal;

    if (prevmodalImage !== nextmodalImage) {
      return;
    }

    if (prevSearchQuerry !== nextSearchQuerry) {
      this.toggleIsLoading();
      this.setState({ images: [], error: null });

      setTimeout(() => {
        imageAPI(nextSearchQuerry, nextpage)
          .then((images) => this.setState({ images }))
          .catch((error) => this.setState({ error }))
          .finally(this.toggleIsLoading);
      }, 300);
    }

    if (nextpage === 1) {
      return;
    }

    if (prevPage !== nextpage) {
      this.toggleIsLoading();

      setTimeout(() => {
        imageAPI(prevSearchQuerry, nextpage)
          .then((images) => {
            this.setState({ images: [...prevImages, ...images] });
          })
          .finally(this.toggleIsLoading);
      }, 300);
    }

    if (!prevShowModal && !nextshowModal) {
      this.scroll();
    }
  }

  getSearchQuerry = (searchQuery) => this.setState({ searchQuery });

  pageIncrement = () =>
    this.setState((prevState) => ({ page: prevState.page + 1 }));

  resetPage = () => this.setState({ page: 1 });

  toggleIsLoading = () =>
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  openModal = (url, alt) => {
    this.toggleModal();

    this.setState(({ modalImage }) => ({
      modalImage: url,
      modalImageAlt: alt,
    }));
  };

  closeModal = () => {
    this.toggleModal();

    this.setState(({ modalImage }) => ({
      modalImage: '',
      modalImageAlt: '',
    }));
  };

  render() {
    const { images, showModal, modalImage, modalImageAlt, error, isLoading } =
      this.state;
    return (
      <main className="app">
        <Searchbar onSubmit={this.getSearchQuerry} resetPage={this.resetPage} />
        {error && <Notification message={error.message} />}
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loading />}
        {images.length ? <Button page={this.pageIncrement} /> : null}
        {showModal && (
          <Modal
            closeModal={this.closeModal}
            modalImage={modalImage}
            modalImageAlt={modalImageAlt}
          />
        )}
      </main>
    );
  }
}

export default App;
