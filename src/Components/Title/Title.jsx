import PropTypes from 'prop-types';
import './Title.css';

export default function Title({ title, lesson, children }) {
  return (
    <>
      <div className='title__wrapper'>
        <h1 className='title'>
          {title}
          <span>{lesson}</span>
        </h1>
      </div>
      {children}
    </>
  );
}






Title.defaultProps = {
  lesson: 3,
  title: 'flexbox',
};

Title.propTypes = {
  lesson: PropTypes.number,
  title: PropTypes.string.isRequired,
};
