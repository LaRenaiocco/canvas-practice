import React from 'react';

function ClearCanvas(props) {

	function eraseCanvas() {
		props.clear('clear')
	}

	return (
		<button onClick={eraseCanvas}>Start Over</button>
	)
}

export default ClearCanvas