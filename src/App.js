import React, { useState } from 'react';
import Canvas from './components/Canvas';
import CanvasSize from './components/CanvasSize';
import SaveImage from './components/SaveImage';
import Colors from './components/Colors';

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
      <Canvas 
        height={size.height}
        width={size.width}
      />
      <CanvasSize canvasSize={canvasSize} />
      <SaveImage />
      <Colors />
      <Colors />
      <Colors />

    </div>
  );
}

export default App;
