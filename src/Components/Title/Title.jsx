import PropTypes from 'prop-types';
import './Title.css'


export default function Title({ title, lesson }) {
  return (
    <div className='title__wrapper'>
      <h1 className='title'>{title}<span>{lesson}</span></h1>
    </div>
  )
}


Title.defaultProps = {
  lesson: 1
}

Title.propTypes = {
  lesson: PropTypes.number,
  title: PropTypes.string.isRequired
}
