import React from 'react'

function Button(props) {
  return (
    <button className={"rounded-md "+props.styles}>
              {props.name}
    </button>
  )
}

export default Button
