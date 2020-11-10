import React, { useState } from 'react';
import Canvas from './components/Canvas'
import CanvasSize from './components/CanvasSize'

const HEIGHT = 500
const WIDTH = 500

function App() {

  const [size, setSize] = useState({height: 500, width: 500})

  function canvasSize(newHeight, newWidth) {
    const newSize = {height: newHeight, width: newWidth}
    setSize(newSize)
  }
  return (
    <div>
      <CanvasSize canvasSize={canvasSize} />
      <Canvas 
        height={size.height}
        width={size.width}
      />
    </div>
  );
}

export default App;
