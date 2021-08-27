import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
// import Clock from './components/Clock';
// import Modal from './components/Modal';
import imageAPI from './services/images-api';
import './App.scss';

// fetchImages('sun', 1).then(console.log());

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
    const page = this.state.page;

    if (prevSearchQuerry !== nextSearchQuerry) {
      imageAPI(nextSearchQuerry, page).then((images) =>
        this.setState({ images })
      );
    }
  }

  getSearchQuerry = (searchQuery) => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {};

  render() {
    const { images } = this.state;
    return (
      <main className="app">
        <Searchbar onSubmit={this.getSearchQuerry} />
        <ImageGallery images={images} />
      </main>
    );
  }
}

export default App;
