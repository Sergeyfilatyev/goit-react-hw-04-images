import PropTypes from 'prop-types';
import s from './Button.module.css';

export function Button({ onClick }) {
  return (
    <button className={s.button} onClick={onClick} type="button">
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
