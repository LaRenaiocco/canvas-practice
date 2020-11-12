import React, { useState } from 'react';
import Landing from './components/Landing';
import Canvas from './components/Canvas';
import CanvasSize from './components/CanvasSize';
import ColorButton from './components/ColorButton';
import PaintSizer from './components/PaintSizer';
import bluewall from  "./components/assets/bluewall.jpg"



function App() {

  const [size, setSize] = useState({height: 500, width: 800})
  const [paintColor, setPaintColor] = useState('black')
  const [brush, setBrush] = useState(10)
  const wall = bluewall
 


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

  function hideWelcome() {
    const welcome = document.getElementById('welcome')
    welcome.style.display = "none";
    const paint = document.getElementById('paint')
    paint.style.display = "block";
  }
  

  return (
    <div>
      <div id='welcome' onClick={hideWelcome}>
        <Landing />
      </div>
      <div className="row" id='paint'>
        <div className="column left ">
          <Canvas 
            height={size.height}
            width={size.width}
            paintColor={paintColor}
            brush={brush}
            wall={wall}
          />
          <CanvasSize canvasSize={canvasSize} />
        </div>
        <div className="column right">
          <div>Colors</div>
          <ColorButton name='red' changeColor={changeColor} />
          <ColorButton name='orange' changeColor={changeColor} />
          <ColorButton name='yellow' changeColor={changeColor} />
          <ColorButton name='green' changeColor={changeColor}/>
          <ColorButton name='blue' changeColor={changeColor}/>
          <ColorButton name='purple' changeColor={changeColor}/>
          <ColorButton name='magenta' changeColor={changeColor}/>
          <ColorButton name='black' changeColor={changeColor} />
          <ColorButton name='grey' changeColor={changeColor} />
          <ColorButton name='white' changeColor={changeColor} />
          <ColorButton name='brown' changeColor={changeColor} />

          <br />
          <div>Brushes</div>
          <PaintSizer name='small' brushSize={brushSize} height={10} width={10} />
          <PaintSizer name='medium' brushSize={brushSize} height={20} width={20} />
          <PaintSizer name='large' brushSize={brushSize} height={30} width={30}/>
        </div>
      </div>
    </div>
  );
}

export default App;
