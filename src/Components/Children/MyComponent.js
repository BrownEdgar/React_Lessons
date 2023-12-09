/////////////////////////////////////////////////////////////


// link => https://ru.legacy.reactjs.org/docs/composition-vs-inheritance.html
/////////////////////////////////////////////////////////////


import React from 'react'
import PropTypes from 'prop-types'

export default function MyComponent({ children }) {
  const divStyle = {
    width: '250px',
    height: 'auto'
  }

  return (
    <div className={divStyle}>
      {children}
    </div>
  )
}

MyComponent.defaultProps = {
  name: "default name"
}

MyComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element
  ]).isRequired
};
