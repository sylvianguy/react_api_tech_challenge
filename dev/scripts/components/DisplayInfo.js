import React from 'react';

//This reusable component displays the children as long as the display condition that is being passed as props is true, otherwise it will return nothing.

const DisplayInfo = ({ display, children }) => {
	if (display) {
		return children
	}
	return null
}

export default DisplayInfo;