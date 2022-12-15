import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import s from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { src, alt, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li className={s.imageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={s.imageGalleryItemImage}
          src={src}
          alt={alt}
        />{' '}
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }
}
export default ImageGalleryItem;
