import React, { useCallback, useEffect, useRef, useState } from 'react';
import ClearCanvas from './ClearCanvas';
import backdrop from  "./assets/bluewall.jpg"

// let coordinates = {x: Number, y: Number}

function Canvas(props) {
  // State for tracking if the app should be painting or not.
  const [painting, setPainting] = useState(false)
  // state for tracking x and y position of mouse at various times {x: num, y: num}
  const [mousePosition, setmousePosition] = useState(undefined)

  const [clearCanvas, setClearCanvas] = useState(undefined)
  // ref hook to track current state of canvas element
  const canvasRef = useRef(null);
  // backdrop for canvas
  const backdropImg = new Image()
  backdropImg.src = backdrop

// Loads canvas with background image added to context and does not run again
// Image is set to canvas height and width
useEffect(() => {
    // if (!canvasRef.current) return;
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    backdropImg.onload = (() => {
      ctx.drawImage(backdropImg, 0, 0, backdropImg.width, backdropImg.height, 
                  0, 0, canvas.width, canvas.height);
    })
  }, [props.height, props.width])

  // activates paint method on mouse down event
  const startPaint = useCallback(evt => {
    const coordinates = getCoords(evt)
    if (coordinates) {
      setmousePosition(coordinates)
      setPainting(true)
    }
  }, [])
//  To use callbacks or not to use callbacks?? That is the question...
  // function startPaint(evt) {
  //   const coordinates = getCoords(evt)
  //   if (coordinates) {
  //     setmousePosition(coordinates)
  //     setPainting(true)
  //   }
  // }

  // tracks mouse positions on mouse move event for painting
  const paint = useCallback(evt => {
    if(painting) {
      const newMousePosition = getCoords(evt);
      if (mousePosition && newMousePosition) {
        draw(mousePosition, newMousePosition);
        setmousePosition(newMousePosition);
      }
    }
  }, [painting, mousePosition])

  // deactivates painting state on mouse up event
  const endPaint = useCallback(evt => {
    setPainting(false);
    setmousePosition(undefined);
  }, []);

  // gets coordinates of mouse position
  function getCoords(evt) {
    const canvas = canvasRef.current
    // probably need to calculate some offset here and use canvas
    return {x: evt.clientX, y: evt.clientY}
  }

  // takes in mouse positions and draws lines
  function draw(mousePosition, newMousePosition) {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');

    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(mousePosition.x, mousePosition.y)
    ctx.lineTo(newMousePosition.x, newMousePosition.y)
    ctx.closePath()
    ctx.stroke()
  }

  function clear(string) {
    const activateClear = string
    setClearCanvas(activateClear)
    if (ClearCanvas) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(backdropImg, 0, 0, backdropImg.width, backdropImg.height, 
        0, 0, canvas.width, canvas.height);
    }
    setClearCanvas(undefined)
  }

  // function clearCanvas() {
  //   if (props.clear === true) {
  //     const canvas = canvasRef.current
  //     const ctx = canvas.getContext('2d');
  //     ctx.clearRect(0, 0, canvas.width, canvas.height)
  //   }


  // }

  return (
    <React.Fragment>
      <div >
        <canvas 
          ref={canvasRef} 
          height={props.height} 
          width={props.width}
          onMouseDown={startPaint}
          onMouseUp={endPaint}
          onMouseLeave={endPaint}
          onMouseMove={paint}
        >
        </canvas>
      </div>
      <ClearCanvas clear={clear} />
    </React.Fragment>
  )
}
export default Canvas
