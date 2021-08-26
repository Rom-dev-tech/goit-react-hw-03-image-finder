import React, { Component } from 'react';
import Container from './components/Container';
import Clock from './components/Clock';
// import Modal from './components/Modal';
import fetchImages from './services/images-api';

fetchImages('sun', 1).then(console.log());

class App extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  changeFilter = (event) => {};

  toggleModal = () => {};

  render() {
    return (
      <Container>
        <Clock direction="center" size={30} />
        <h1>Lets Start</h1>
      </Container>
    );
  }
}

export default App;
