import React, { useState } from 'react';

function CanvasSize(props) {

  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [showForm, setShowForm] = useState(false)

  function handleHeight(e) {
    setHeight(e.target.value)
  }

  function handleWidth(e) {
    setWidth(e.target.value)
  }
  
  // updates height and width and hides form on submit
  function handleSubmit(e) {
    e.preventDefault()
    props.canvasSize(height, width)
    setHeight('')
    setWidth('')
    setShowForm(false)
  }

  // default button view
  const sizeChangeButton = (
    <span class="tooltip">
      <button onClick={() => setShowForm(true)}>Change Canvas Size</button>
      <span class="tooltiptext"> Choosing a new backdrop size will reset your art!</span>
    </span>
  )

  // alternate form view
  const sizeChangeForm = (
    <form onSubmit={handleSubmit}>
    What size would you like your wall to be?
    <input 
      type="text" 
      id="height" 
      name="height" 
      placeholder="height in pixels"
      value={height}
      onChange={handleHeight}
    />
    <input 
      type="text" 
      id="width" 
      name="width" 
      placeholder="width in pixels"
      value={width}
      onChange={handleWidth}
    />
    <button type="submit">Set Canvas Size</button>
  </form>
  )

  return <div>{showForm ? sizeChangeForm : sizeChangeButton}</div>
}

export default CanvasSize