import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
// import Clock from './components/Clock';
// import Modal from './components/Modal';
import imageAPI from './services/images-api';
import './App.scss';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuerry = prevState.searchQuery;
    const nextSearchQuerry = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextpage = this.state.page;
    const prevImages = prevState.images;

    if (prevSearchQuerry !== nextSearchQuerry) {
      imageAPI(nextSearchQuerry, nextpage).then((images) =>
        this.setState({ images })
      );
    }

    if (prevPage !== nextpage) {
      if (nextpage === 1) {
        return;
      }
      imageAPI(prevSearchQuerry, nextpage).then((images) => {
        this.setState({ images: [...prevImages, ...images] });
      });
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  getSearchQuerry = (searchQuery) => {
    this.setState({ searchQuery });
  };

  pageIncrement = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  toggleModal = () => {};

  render() {
    const { images } = this.state;
    return (
      <main className="app">
        <Searchbar onSubmit={this.getSearchQuerry} resetPage={this.resetPage} />
        <ImageGallery images={images} page={this.pageIncrement} />
      </main>
    );
  }
}

export default App;
