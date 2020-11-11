import React, { useState } from 'react';

function CanvasSize(props) {
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')

  function handleHeight(e) {
    setHeight(e.target.value)
  }

  function handleWidth(e) {
    setWidth(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    props.canvasSize(height, width)
    setHeight('')
    setWidth('')
  }
  return (
    <form onSubmit={handleSubmit}>
      What size would you like your wall to be?
      <input 
        type="text" 
        id="height" 
        name="height" 
        placeholder="height"
        value={height}
        onChange={handleHeight}
      />
      <input 
        type="text" 
        id="width" 
        name="width" 
        placeholder="width"
        value={width}
        onChange={handleWidth}
      />
      <button type="submit">Set Canvas Size</button>
    </form>
  )
}

export default CanvasSize