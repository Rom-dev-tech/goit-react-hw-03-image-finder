import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import imageAPI from './services/images-api';
import Button from './components/Button';
import Loading from './components/Loader';
import Modal from './components/Modal';
import Notification from './components/Notification';
import AboutAppInfo from './components/AboutAppInfo';
import './App.scss';

class App extends Component {
  state = {
    searchQuery: null,
    page: 1,
    images: [],
    isLoading: false,
    showModal: false,
    modalImage: '',
    modalImageAlt: '',
    error: null,
    startAbout: true,
    isModalLoading: true,
  };

  scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

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
      this.setState({ images: [], error: null, startAbout: false });

      if (nextSearchQuerry === '') {
        setTimeout(() => {
          this.setState({
            error: { message: 'Ops, empty. Please enter something...' },
          });
          this.toggleIsLoading();
        }, 500);
        return;
      }

      imageAPI(nextSearchQuerry, nextpage)
        .then((images) => this.setState({ images }))
        .catch((error) => this.setState({ error }))
        .finally(this.toggleIsLoading);
    }

    if (nextpage === 1) {
      return;
    }

    if (prevPage !== nextpage) {
      this.toggleIsLoading();

      imageAPI(prevSearchQuerry, nextpage)
        .then((images) => {
          this.setState({ images: [...prevImages, ...images] });
        })
        .catch((error) =>
          this.setState({
            images: [],
            error: { message: 'Sorry, no more pictures ...' },
          })
        )
        .finally(this.toggleIsLoading);
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

  cleareImages = () => {
    this.setState({ images: [] });
    this.setState({ startAbout: true });
  };

  render() {
    const {
      images,
      showModal,
      modalImage,
      modalImageAlt,
      error,
      isLoading,
      startAbout,
      isModalLoading,
    } = this.state;
    return (
      <main className="app">
        <Searchbar
          onSubmit={this.getSearchQuerry}
          resetPage={this.resetPage}
          cleareImages={this.cleareImages}
        />

        {error && <Notification message={error.message} />}

        {startAbout ? (
          <AboutAppInfo />
        ) : (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {isLoading && <Loading />}

        {images.length >= 12 ? <Button page={this.pageIncrement} /> : null}

        {showModal && (
          <Modal
            isModalLoading={isModalLoading}
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
