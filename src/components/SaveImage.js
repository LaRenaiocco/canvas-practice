import React from 'react';

function SaveImage(props) {

  function handleClick() {
    props.imageSave()
  }


  return (
    <button onClick={handleClick}>Save My Art!</button>
  )
}

export default SaveImage