import React from 'react';

function PaintSizer(props) {
  
  function brushSizer() {
    if (props.name === 'small'){
      props.brushSize(10)
    } else if (props.name === 'medium') {
      props.brushSize(20)
    } else if (props.name === 'large') {
      props.brushSize(30)
    }
  }
  return (
    <button
      type="button"
      className="btn toggle-btn"
      id={props.name}
      // aria-pressed={props.isPressed}
      onClick={brushSizer}
    > {props.name}
    </button>
    )
}
export default PaintSizer