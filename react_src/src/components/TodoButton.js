import React from 'react'

export default (props) => {
  const isDisable = props.value.length === 0
  return (
    <button
      type="button"
      disabled={isDisable}
      className="button is-primary"
      onClick={props.onClick}> Add </button>
  )
}
