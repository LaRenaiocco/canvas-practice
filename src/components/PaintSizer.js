import React from 'react';
import circle from  "./assets/circle.png"

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
    <img 
      id={props.name}
      src={circle}
      onClick={brushSizer}
      height={props.height}
      width={props.width}
      className="brushsize"

    />
    )
}
export default PaintSizer