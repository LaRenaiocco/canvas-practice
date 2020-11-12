import React, { useState } from 'react';

function ColorButton(props) {


  function changeColor() {
    props.changeColor(props.name)
  }

  return (
    <button
      type="button"
      className="btn toggle-btn"
      id={props.name}

      onClick={changeColor}
    >
    </button>
  )
}
export default ColorButton