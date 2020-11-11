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
  const [triggerSave, setTriggerSave] = useState(false)


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
        brush={brush}
      />
      <CanvasSize canvasSize={canvasSize} />
      <ColorButton name='red' changeColor={changeColor} />
      <ColorButton name='blue' changeColor={changeColor}/>
      <ColorButton name='green' changeColor={changeColor}/>
      {/* <ClearCanvas clear={clear} /> */}
      <PaintSizer name='small' brushSize={brushSize} />
      <PaintSizer name='medium' brushSize={brushSize} />
      <PaintSizer name='large' brushSize={brushSize} />

    </div>
  );
}

export default App;
