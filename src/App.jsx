import React, { Component } from 'react';
// import shortid from 'shortid';
import Container from './components/Container';
// import Filter from './components/Filter';
import Clock from './components/Clock';
// import Title from './components/Title';
// import MainTitle from './components/MainTitle';
// import Modal from './components/Modal';
// import IconButton from './components/IconButton';
// import { ReactComponent as AddIcon } from './icons/add.svg';
// import FlexWrapper from './components/FlexWrapper';

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
