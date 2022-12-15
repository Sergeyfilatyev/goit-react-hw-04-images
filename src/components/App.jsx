import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import ImagesErrorView from './ImagesErrorView/ImagesErrorView';
import fetchImage from 'services/imageApi';
import s from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class App extends Component {
  state = {
    error: null,
    images: [],
    page: 1,
    imageName: '',
    totalPages: null,
    status: Status.IDLE,
  };
  handleFormSubmit = imageName => {
    if (imageName === this.state.imageName) {
      toast.info(`Image ${imageName} already uploaded`);
      return;
    }
    this.setState({
      imageName,
      page: 1,
      images: [],
    });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      this.state.page !== prevState.page
    ) {
      this.setState({ status: Status.PENDING });
      this.renderImages();
    }
  }
  renderImages() {
    const { page, imageName } = this.state;

    fetchImage(imageName, page)
      .then(response => {
        if (response.hits.length === 0) {
          toast.warning(
            `No images ${imageName} your search query. Please try again.`
          );
          this.setState({ status: Status.IDLE });
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          totalPages: Math.ceil(response.totalHits / 12),
          status: Status.RESOLVED,
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }
  nextPages = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
    scroll.scrollToBottom();
  };
  render() {
    const { status, error, images, page, totalPages } = this.state;

    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {status === Status.IDLE && (
          <p className={s.text}>Please enter your search</p>
        )}
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && <ImageGallery images={images} />}
        {status === Status.RESOLVED && page < totalPages && (
          <Button onClick={this.nextPages} />
        )}
        {status === Status.REJECTED && (
          <ImagesErrorView message={error.message} />
        )}
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}
export default App;
