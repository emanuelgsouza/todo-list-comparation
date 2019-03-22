import React from 'react'

export default (props) => {
  return (
    <div className="field">
      <p className="control">
        <input
          autofocus
          placeholder="Uma tarefa qualquer"
          className="input"
          type="text"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)} />
      </p>
    </div>
  )
}
