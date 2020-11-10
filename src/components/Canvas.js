import React, { useCallback, useEffect, useRef, useState } from 'react';

// let coordinates = {x: Number, y: Number}

function Canvas(props) {

  const [painting, setPainting] = useState(false)
  const [mousePosition, setmousePosition] = useState(undefined)

  const canvasRef = useRef(null);

  const startPaint = useCallback(evt => {
    const coordinates = getCoords(evt)
    if (coordinates) {
      setmousePosition(coordinates)
      setPainting(true)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    return() => {
      canvas.removeEventListener('mousedown', startPaint);
    };
    // const ctx = canvas.getContext('2d')
    
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);
  }, [startPaint]);

  const paint = useCallback(evt => {
    if(painting) {
      const newMousePosition = getCoords(evt);
      if (mousePosition && newMousePosition) {
        draw(mousePosition, newMousePosition);
        setmousePosition(newMousePosition);
      }
    }
  }, [painting, mousePosition])

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.addEventListener('mousemove', paint);
    return () => {
      canvas.removeEventListener('mousemove', paint)
    };
  }, [paint])

  const endPaint = useCallback(evt => {
    setPainting(false);
    setmousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.addEventListener('mouseup', endPaint);
    canvas.addEventListener('mouseleave', endPaint);
    return () => {
      canvas.removeEventListener('mouseup', endPaint);
      canvas.removeEventListener('mouseleave', endPaint);
    };
  }, [endPaint]);

  function getCoords(evt) {
    const canvas = canvasRef.current
    // probably need to calculate some offset here and use canvas
    return {x: evt.clientX, y: evt.clientY}
  }

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
  return (
    <React.Fragment>
      <div id="backdrop" height={props.height} width={props.width}>
        <canvas 
          ref={canvasRef} 
          height={props.height} 
          width={props.width}
          // onMouseDown={startPosition}
          // onMouseUp={stopPosition}
          // onMouseMove={paint}
        >
        </canvas>
      </div>
    </React.Fragment>
  )
}
export default Canvas

// const LINEWIDTH = 10


// function Canvas(props) {

//   const [painting, setPainting] = useState(false)
//   const [ctx, setCtx] = useState(null)
//   const [mouseDown, setMouseDown] = useState({x: 0, y: 0})
  

//   const canvasRef = useRef(null);
//   const backdrop = new Image()
//   backdrop.src = "../../bluewall.jpg"



//   function draw(e) {
//     // backdrop.onload = (() => {
//     //   ctx.drawImage(backdrop, 0, 0, backdrop.width, backdrop.height, 
//     //                 0, 0, canvas.width, canvas.height)
//     if (!painting) return;  
//       ctx.lineWidth = 10;
//       ctx.lineCap = 'round';

//       ctx.lineTo(mouseDown.x, mouseDown.y);
//       ctx.stroke();
//       ctx.beginPath();
//       ctx.moveTo(mouseDown.x, mouseDown.y)
//     // })
//   }


//       function startPosition() {
//       setPainting(true)
//       console.log('TRUE')
//     }
  
//     function stopPosition() {
//       setPainting(false)
//       console.log('FALSE')
//     }

//     function paint(e, ctx) {
//       if (!painting) return;
//       console.log('MOUSE IS MOVING')
//       setMouseDown({x: e.clientX, y: e.clientY})
//       ctx.lineWidth = 10;
//       ctx.lineCap = 'round';

//       ctx.lineTo(mouseDown.x, mouseDown.y);
//       ctx.stroke();
//       ctx.beginPath();
//       ctx.moveTo(mouseDown.x, mouseDown.y)

//     }

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     let ctx = canvas.getContext('2d')
//     paint(ctx)


//   }, [mouseDown])

//   return (
//     <React.Fragment>
//     <div 
//       height={props.height} 
//       width={props.width}
//       // styles={{ backgroundImage: `url(${backdrop})`}}
//     >
//       <canvas 
//         ref={canvasRef} 
//         height={props.height} 
//         width={props.width}
//         onMouseDown={startPosition}
//         onMouseUp={stopPosition}
//         onMouseMove={paint}
//       >
//       </canvas>
//     </div>
//     </React.Fragment>
//     )
// }

// export default Canvas