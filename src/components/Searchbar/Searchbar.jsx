import { Component } from 'react';
import PropTypes from 'prop-types';
import '../Searchbar/Searchbar.scss';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return alert('Enter search');
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm__button">
            <span className="searchForm__button--label">Search</span>
          </button>

          <input
            className="searchForm__input"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
