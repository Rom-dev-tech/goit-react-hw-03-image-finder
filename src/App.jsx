import React, { Component } from 'react';
// import Clock from './components/Clock';
// import Modal from './components/Modal';
// import fetchImages from './services/images-api';
import Searchbar from './components/Searchbar';

// fetchImages('sun', 1).then(console.log());

class App extends Component {
  state = {
    searchQuery: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  getSearchQuerry = (searchQuery) => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {};

  render() {
    return (
      <>
        <Searchbar onSubmit={this.getSearchQuerry} />
      </>
    );
  }
}

export default App;
