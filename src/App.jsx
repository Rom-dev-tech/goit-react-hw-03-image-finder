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

    if (prevSearchQuerry !== nextSearchQuerry) {
      imageAPI(nextSearchQuerry, nextpage).then((images) =>
        this.setState({ images })
      );
    }

    if (prevPage !== nextpage) {
      imageAPI(prevSearchQuerry, nextpage).then((images) =>
        this.setState({ images })
      );
    }
  }

  resetPage() {
    this.setState({ page: 1 });
  }

  getSearchQuerry = (searchQuery) => {
    this.setState({ searchQuery });
    this.resetPage();
  };

  pageIncrement = () => {
    this.setState({ page: this.state.page + 1 });
  };

  toggleModal = () => {};

  render() {
    const { images } = this.state;
    return (
      <main className="app">
        <Searchbar onSubmit={this.getSearchQuerry} />
        <ImageGallery images={images} page={this.pageIncrement} />
      </main>
    );
  }
}

export default App;
