import React from 'react';

function ClearCanvas(props) {

	function clear() {
		console.log('clear function called')
		return
	}

	return (
		<button onClick={clear}>Start Over</button>
	)
}

export default ClearCanvas