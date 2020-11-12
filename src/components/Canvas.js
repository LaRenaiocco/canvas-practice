import React, { useCallback, useEffect, useRef, useState } from 'react';
import ClearCanvas from './ClearCanvas';
import SaveImage from './SaveImage';
import Backdrop from './Backdrop';
import bluewall from  "./assets/bluewall.jpg"
import brickwall from  "./assets/brickwall.jpg"
import darkwall from  "./assets/darkwall.jpg"
import oldwall from  "./assets/oldwall.jpg"
import pinkwall from  "./assets/pinkwall.jpg"
import whitewashwall from  "./assets/whitewashwall.jpg"
import yellowwall from  "./assets/yellowwall.jpg"


function Canvas(props) {

  const [painting, setPainting] = useState(false)
  const [mousePosition, setmousePosition] = useState(undefined)
  const [wall, setWall] = useState(bluewall)

  const canvasRef = useRef(null);
  const backdropImg = new Image()
  backdropImg.src = wall

// Loads canvas with background image added to context and does not run again
// unless background image, height or width is changed by user
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    backdropImg.onload = (() => {
      ctx.drawImage(backdropImg, 0, 0, backdropImg.width, backdropImg.height, 
                  0, 0, canvas.width, canvas.height);
    })
  }, [props.height, props.width, wall])


  // activates paint method on mouse down event
  const startPaint = useCallback(evt => {
    const coordinates = getCoords(evt)
    if (coordinates) {
      setmousePosition(coordinates)
      setPainting(true)
      paint()
    }
  }, [])


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

    ctx.lineWidth = props.brush
    ctx.lineCap = 'round'
    ctx.strokeStyle = props.paintColor
    ctx.beginPath()
    ctx.moveTo(mousePosition.x, mousePosition.y)
    ctx.lineTo(newMousePosition.x, newMousePosition.y)
    ctx.closePath()
    ctx.stroke()
  }

  // Reset canvas/erase all user work
  function clear() {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(backdropImg, 0, 0, backdropImg.width, backdropImg.height, 
        0, 0, canvas.width, canvas.height)
  }

  // saves image to a Data URL to download
  function imageSave() {
    console.log('image save triggered')
    const canvas = canvasRef.current
    const imageURL = canvas.toDataURL()
    const filename = "my_graffiti"
    download(imageURL, filename)
  }

  // downloads image file to users computer downloads file
  function download(imageURL, filename) {
    const download = document.createElement('a')
    download.href = imageURL
    download.target = '_blank';
    download.download = filename;
    const evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0,
                      false, false, false, false, 0, null);
    download.dispatchEvent(evt);
  }

  function updateWall(imageId) {
    setWall(imageId)
  }


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
      <SaveImage imageSave={imageSave}/>
      <Backdrop updateWall={updateWall}/>

    </React.Fragment>
  )
}
export default Canvas
