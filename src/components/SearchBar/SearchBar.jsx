import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

class SearchBar extends Component {
  onSearch = evt => {
    evt.preventDefault();
    const formDOM = evt.currentTarget;
    const query = formDOM.elements.search.value.trim();
    this.props.onNewQuery(query);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSearch}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
            name="search"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.prototypes = {
  onNewQuery: PropTypes.func.isRequired,
};
