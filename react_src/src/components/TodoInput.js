import React from 'react'

export default (props) => {
  return (
    <div className="field">
      <p className="control">
        <input
          className="input"
          type="text"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)} />
      </p>
    </div>
  )
}
