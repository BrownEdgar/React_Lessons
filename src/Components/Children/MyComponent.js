import React from 'react'
import PropTypes from 'prop-types'

export default function MyComponent(props) {
    const divStyle = {
        display: "block",
        width: '250px',
        height: 'auto'
    }
    return (
        <div className={divStyle}>
            <p>{props.name}</p>
            {props.children}
        </div>
    )
}

MyComponent.defaultProps = {
    name: "default name"
}











MyComponent.propTypes = {
    // check Here
};
