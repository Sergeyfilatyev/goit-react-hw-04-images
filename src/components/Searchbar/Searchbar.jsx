import { Component } from 'react';
import s from './Searchbar.module.css';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    imageName: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.info('Enter your search image');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  handleNameChange = event => {
    this.setState({ imageName: event.target.value.toLowerCase() });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button className={s.searchFormButton} type="submit">
            <GoSearch />
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
