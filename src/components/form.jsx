import React from 'react'

function Form(props) {
  return (
    <div className="w-full ">
          <form action='#' onSubmit={props.onSubmit}>
            <input
              type="text"
              placeholder="what do you need to do?"
              className="h-12 w-full border border-gray-300 p-4 rounded-md"
              onChange={props.onChange}
              value={props.inputValue}
            ></input>
          </form>
        </div>
  )
}

export default Form