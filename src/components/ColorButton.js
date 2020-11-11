import React, { useState } from 'react';

function ColorButton(props) {

  // const [color, setColor] = useState('black')

  function changeColor(evt) {
    // setColor(props.name)
    props.changeColor(props.name)
  }

  return (
    <button
      type="button"
      className="btn toggle-btn"
      id={props.name}
      // aria-pressed={props.isPressed}
      onClick={changeColor}
    > {props.name}
    </button>
  )
}
export default ColorButton