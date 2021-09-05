import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from '../ImageGallery';
import imageAPI from '../../services/images-api';
import Button from '../Button';
import Loading from '../Loader';
import Modal from '../Modal';
import Notification from '../Notification';
import AboutAppInfo from '../AboutAppInfo';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImagesView extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
    toggleClearPage: PropTypes.bool.isRequired,
  };

  state = {
    page: 1,
    images: [],
    showModal: false,
    modalImage: '',
    modalImageAlt: '',
    error: null,
    status: Status.IDLE,
    isClickButtonLoadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuerry = prevProps.searchQuery;
    const nextSearchQuerry = this.props.searchQuery;
    const prevToggleClearStartPage = prevProps.toggleClearPage;
    const nextToggleClearStartPage = this.props.toggleClearPage;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevToggleClearStartPage !== nextToggleClearStartPage) {
      this.setState({ status: Status.IDLE });
    }

    if (prevSearchQuerry !== nextSearchQuerry) {
      this.setState({
        page: 1, //searchBar
        images: [], // searchBar
        isClickButtonLoadMore: false,
      });

      if (nextSearchQuerry === '') {
        setTimeout(() => {
          this.setState({
            error: {
              message: 'Ops, empty. Please enter something...',
            },
            status: Status.REJECTED,
          });
        }, 500);
        return;
      }

      this.fetchImages(nextSearchQuerry, 1);
    }

    if (nextPage === 1) {
      return;
    }

    if (prevPage !== nextPage) {
      this.setState({
        isClickButtonLoadMore: true,
      });

      this.fetchImages(prevSearchQuerry, nextPage);
    }
  }

  fetchImages(searchQuerry, page) {
    this.setState({
      status: Status.PENDING,
    });

    imageAPI(searchQuerry, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          status: Status.RESOLVED,
        }));
        this.scroll();
      })
      .catch((error) =>
        this.setState({
          error: {
            message: 'Sorry, no more pictures ...',
          },
          status: Status.REJECTED,
        })
      );
  }

  scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  pageIncrement = () =>
    this.setState((prevState) => ({ page: prevState.page + 1 }));

  closeModal = () => {
    this.toggleModal();

    this.setState(({ modalImage }) => ({
      modalImage: '',
      modalImageAlt: '',
    }));
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  openModal = (url, alt) => {
    this.toggleModal();

    this.setState(({ modalImage }) => ({
      modalImage: url,
      modalImageAlt: alt,
    }));
  };

  render() {
    const {
      images,
      showModal,
      modalImage,
      modalImageAlt,
      error,
      status,
      isClickButtonLoadMore,
    } = this.state;

    if (status === 'idle') {
      return <AboutAppInfo />;
    }

    if (status === 'pending') {
      return (
        <>
          {isClickButtonLoadMore && (
            <ImageGallery images={images} openModal={this.openModal} />
          )}
          <Loading />
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <Notification message={error.message} />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} openModal={this.openModal} />
          {images.length >= 12 ? <Button page={this.pageIncrement} /> : null}
          {showModal && (
            <Modal
              closeModal={this.closeModal}
              modalImage={modalImage}
              modalImageAlt={modalImageAlt}
            />
          )}
        </>
      );
    }
  }
}

export default ImagesView;
