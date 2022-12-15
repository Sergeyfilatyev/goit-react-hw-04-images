import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <li className={s.imageGalleryItem}>
      <img
        onClick={toggleModal}
        className={s.imageGalleryItemImage}
        src={src}
        alt={alt}
      />{' '}
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
    </li>
  );
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };
//   static propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     largeImageUrl: PropTypes.string.isRequired,
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };
//   render() {
//     const { src, alt, largeImageUrl } = this.props;
//     const { showModal } = this.state;
//     return (
//       <li className={s.imageGalleryItem}>
//         <img
//           onClick={this.toggleModal}
//           className={s.imageGalleryItemImage}
//           src={src}
//           alt={alt}
//         />{' '}
//         {showModal && (
//           <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
//         )}
//       </li>
//     );
//   }
// }
// export default ImageGalleryItem;
