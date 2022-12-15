import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
export function ImageGallery({ images }) {
  return (
    <ul className={s.imageGallery}>
      {images.map(({ webformatURL, id, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImageUrl={largeImageURL}
          />
        );
      })}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
