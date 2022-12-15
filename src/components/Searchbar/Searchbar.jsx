import s from './Searchbar.module.css';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [imageName, setImageName] = useState('');
  const handleNameChange = event => {
    setImageName(event.target.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      toast.info('Enter your search image');
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button className={s.searchFormButton} type="submit">
          <GoSearch />
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="imageName"
          value={imageName}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
// class SearchBar extends Component {
//   state = {
//     imageName: '',
//   };
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.imageName.trim() === '') {
//       toast.info('Enter your search image');
//       return;
//     }

//     this.props.onSubmit(this.state.imageName);
//     this.setState({ imageName: '' });
//   };
//   handleNameChange = event => {
//     this.setState({ imageName: event.target.value.toLowerCase() });
//   };
//   render() {
//     return (
//       <header className={s.searchbar}>
//         <form className={s.searchForm} onSubmit={this.handleSubmit}>
//           <button className={s.searchFormButton} type="submit">
//             <GoSearch />
//           </button>

//           <input
//             className={s.searchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             name="imageName"
//             value={this.state.imageName}
//             onChange={this.handleNameChange}
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
// export default SearchBar;
