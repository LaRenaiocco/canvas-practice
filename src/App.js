import React, { useState } from 'react';
import Canvas from './components/Canvas';
import CanvasSize from './components/CanvasSize';
import SaveImage from './components/SaveImage';
import ColorButton from './components/ColorButton';
import ClearCanvas from './components/ClearCanvas';
import PaintSizer from './components/PaintSizer';


// const COLORS

function App() {

  const [size, setSize] = useState({height: 200, width: 200})
  const [paintColor, setPaintColor] = useState('black')
  const [brush, setBrush] = useState(10)


  function canvasSize(newHeight, newWidth) {
    const newSize = {height: newHeight, width: newWidth}
    setSize(newSize)
  }

  function changeColor(color) {
    setPaintColor(color)
  }

  function brushSize(size) {
    setBrush(size)
  }

  // function clear(bool) {
  //   const activateClear = bool
  //   setClearCanvas(activateClear)
  //   console.log(clearCanvas)
  // }

  return (
    <div>
      <Canvas 
        height={size.height}
        width={size.width}
        paintColor={paintColor}
        brushSize={brushSize}
      />
      <CanvasSize canvasSize={canvasSize} />
      <SaveImage />
      <ColorButton name='red' changeColor={changeColor} />
      <ColorButton name='blue' changeColor={changeColor}/>
      <ColorButton name='green' changeColor={changeColor}/>
      {/* <ClearCanvas clear={clear} /> */}
      <PaintSizer />

    </div>
  );
}

export default App;
