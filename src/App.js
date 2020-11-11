import React, { useState } from 'react';
import Canvas from './components/Canvas';
import CanvasSize from './components/CanvasSize';
import SaveImage from './components/SaveImage';
import ColorButton from './components/ColorButton';
import ClearCanvas from './components/ClearCanvas';
import PaintSizer from './components/PaintSizer';


// const COLORS

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
      <ColorButton />
      <ColorButton />
      <ColorButton />
      <ClearCanvas />
      <PaintSizer />

    </div>
  );
}

export default App;
