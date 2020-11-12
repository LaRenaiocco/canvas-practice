import React, { useState } from 'react'
import bluewall from  "./assets/bluewall.jpg"
import brickwall from  "./assets/brickwall.jpg"
import darkwall from  "./assets/darkwall.jpg"
import oldwall from  "./assets/oldwall.jpg"
import pinkwall from  "./assets/pinkwall.jpg"
import whitewashwall from  "./assets/whitewashwall.jpg"
import yellowwall from  "./assets/yellowwall.jpg"

const CHOICES = [bluewall, brickwall, darkwall, oldwall, 
                  pinkwall, whitewashwall, yellowwall]

function Backdrop(props) {

  const [showBackdrops, setShowBackdrops] = useState(false)

  function updateBackdrop(e) {
    props.updateWall(e.target.src)
    console.log(typeof e.target.src)
    setShowBackdrops(false)
  }

  const backdropTemplate = (
    <div>
      <img id="bluewall" src={bluewall} alt="Blue Wall" height="100" width="100" onClick={updateBackdrop}/>
      <img id="brickwall" src={brickwall} alt= "Brick Wall" height="100" width="100" onClick={updateBackdrop} />
      <img id="darkwall" src={darkwall} alt= "Dark Brick Wall" height="100" width="100" onClick={updateBackdrop} />
      <img id="oldwall" src={oldwall} alt= "Old Brick Wall" height="100" width="100" onClick={updateBackdrop} />
      <img id="pinkwall" src={pinkwall} alt= "Pink Tile Wall" height="100" width="100" onClick={updateBackdrop} />
      <img id="whitewashwall" src={whitewashwall} alt= "Fading White Washed Wall" height="100" width="100" onClick={updateBackdrop} />
      <img id="yellowwall" src={yellowwall} alt= "Yellow Painted Brick Wall" height="100" width="100" onClick={updateBackdrop} />
    </div>
  );

  const selectBackdropButton = (
    <span class="tooltip">
      <button onClick={() => setShowBackdrops(true)}>Change my Wall</button>
      <span class="tooltiptext"> Choosing a new backdrop will reset your art!</span>
    </span>
  )

  return <div>{showBackdrops ? backdropTemplate : selectBackdropButton}</div>
}

export default Backdrop