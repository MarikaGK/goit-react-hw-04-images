import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick }) => (
  <div className={css.ButtonWrapper}>
    <button type="button" className={css.Button} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
