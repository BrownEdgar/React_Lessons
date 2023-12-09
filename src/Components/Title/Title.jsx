import PropTypes from 'prop-types';
import s from "./Title.module.css"


export default function Title({ title, lesson }) {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{title}<span>{lesson}</span></h1>
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
