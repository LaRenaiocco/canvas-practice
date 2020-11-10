import React, { useCallback, useEffect, useRef, useState } from 'react';
import backdrop from  "./assets/bluewall.jpg"

// let coordinates = {x: Number, y: Number}

function Canvas(props) {

  const [painting, setPainting] = useState(false)
  const [mousePosition, setmousePosition] = useState(undefined)

  const canvasRef = useRef(null);
  const backdropImg = new Image()
  backdropImg.src = backdrop

// Loads canvas with background image added to context and does not run again
// Image is set to canvas height and width
useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    backdropImg.onload = (() => {
      ctx.drawImage(backdropImg, 0, 0, backdropImg.width, backdropImg.height, 
                  0, 0, canvas.width, canvas.height);
    })
  }, [])


  const startPaint = useCallback(evt => {
    const coordinates = getCoords(evt)
    if (coordinates) {
      setmousePosition(coordinates)
      setPainting(true)
      console.log('startPaint function called')
    }
  }, [])

  // function startPaint(evt) {
  //   const coordinates = getCoords(evt)
  //   if (coordinates) {
  //     setmousePosition(coordinates)
  //     setPainting(true)
  //     console.log('startPaint function called')
  //   }
  // }

  // useEffect(() => {
  //   if (!canvasRef.current) return;

  //   const canvas = canvasRef.current;
  //   // canvas.addEventListener('mousedown', startPaint);
  //   // return() => {
  //   //   canvas.removeEventListener('mousedown', startPaint);
  //   // };
  // }, [startPaint]);

  const paint = useCallback(evt => {
    if(painting) {
      const newMousePosition = getCoords(evt);
      if (mousePosition && newMousePosition) {
        draw(mousePosition, newMousePosition);
        setmousePosition(newMousePosition);
      }
    }
  }, [painting, mousePosition])

  // useEffect(() => {
  //   if (!canvasRef.current) return;
  //   const canvas = canvasRef.current;
  //   canvas.addEventListener('mousemove', paint);
  //   return () => {
  //     canvas.removeEventListener('mousemove', paint)
  //   };
  // }, [paint])

  const endPaint = useCallback(evt => {
    setPainting(false);
    setmousePosition(undefined);
  }, []);

// THIS ONE WORKS TOO!!  CALLBACK VS REGULAR FUNCTION
  // function endPaint() {
  //   setPainting(false)
  //   setmousePosition(undefined)
  // }

  // useEffect(() => {
  //   if (!canvasRef.current) return;
  //   const canvas = canvasRef.current;
  //   canvas.addEventListener('mouseup', endPaint);
  //   canvas.addEventListener('mouseleave', endPaint);
  //   return () => {
  //     canvas.removeEventListener('mouseup', endPaint);
  //     canvas.removeEventListener('mouseleave', endPaint);
  //   };
  // }, [endPaint]);

  function getCoords(evt) {
    const canvas = canvasRef.current
    // probably need to calculate some offset here and use canvas
    return {x: evt.clientX, y: evt.clientY}
  }

  function draw(mousePosition, newMousePosition) {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    // ctx.drawImage(backdropImg, 0, 0, backdropImg.width, backdropImg.height, 
    //                           0, 0, canvas.width, canvas.height)

    // const ctx = context
    ctx.lineWidth = 10
    ctx.lineCap = 'round'

    ctx.beginPath()
    ctx.moveTo(mousePosition.x, mousePosition.y)
    ctx.lineTo(newMousePosition.x, newMousePosition.y)
    ctx.closePath()

    ctx.stroke()
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
    </React.Fragment>
  )
}
export default Canvas
