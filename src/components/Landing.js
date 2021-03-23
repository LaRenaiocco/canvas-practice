import React, { useState } from 'react';
import bluewall from  "./assets/bluewall.jpg"
import paintsplash from "./assets/paintsplash.png"

function Landing(props) {


  const welcomeTemplate = (
    <div id="landing" >
      <img src={bluewall} id="landingimage" alt=""  />
      <div id="landingtext">
        <img src={paintsplash} id="paintsplash" alt="" />
        <div>Welcome to Rosie's Graffiti Gallery</div>
        <div>You can customize your brick wall and size if you choose</div>
        <div>Save your graffiti masterpiece!</div>
        <div>Ditch that wall if you mess up.</div> 
        <div>Remember you can't undo paint, but you can always paint over it</div>
        <div>click anywhere to start painting!</div>
      </div>
    </div>
  )

  return welcomeTemplate
}

export default Landing