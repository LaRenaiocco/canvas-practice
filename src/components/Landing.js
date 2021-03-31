import React, { useState } from 'react';
import bluewall from  "./assets/bluewall.jpg"
import paintsplash from "./assets/paintsplash.png"

function Landing(props) {


  const welcomeTemplate = (
    <div id="landing" >
      <img src={bluewall} id="landingimage" alt=""  />
      <img src={paintsplash} id="paintsplash" alt="" />
      <div id="landingtext">
        <div class ="line" id="line1">Welcome to the Graffiti Gallery</div>
        <div class="line">A react project by LaRena Iocco</div>
        <div class="line">Click anywhere to start painting!</div>
        <div class="line"><a id="line4link" href="https://github.com/LaRenaiocco/canvas-practice">See my code on Github</a></div>
      </div>
    </div>
  )

  return welcomeTemplate
}

export default Landing