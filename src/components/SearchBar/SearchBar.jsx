import css from './SearchBar.module.css';
import { useImageGallery } from 'providers/ImageGalleryProvider';

const SearchBar = () => {
  const { handleSearchBar } = useImageGallery();

  const onSearch = evt => {
    evt.preventDefault();
    const formDOM = evt.currentTarget;
    const query = formDOM.elements.search.value.trim();
    handleSearchBar(query);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSearch}>
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
};

export default SearchBar;
