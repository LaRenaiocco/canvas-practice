import React from 'react';

function SaveImage(props) {

  function handleClick() {
    // when we click it triggers a data to url action saved to a variable
    // then we initiate the save/download with the image varaibel
    props.imageSave()
  }


  return (
    <button onClick={handleClick}>Save My Art!</button>
  )
}

export default SaveImage