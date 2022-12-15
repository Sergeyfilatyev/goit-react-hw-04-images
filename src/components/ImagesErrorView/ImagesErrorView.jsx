import PropTypes from 'prop-types';
import s from './ImagesErrorView.module.css';
function ImagesErrorView({ message }) {
  return (
    <div className={s.error} role="alert">
      <p className={s.errorText}>
        Sorry, something went wrong. Error: {message}
      </p>
    </div>
  );
}

ImagesErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ImagesErrorView;
