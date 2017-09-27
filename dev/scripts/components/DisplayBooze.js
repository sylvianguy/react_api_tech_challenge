import React from 'react';
 

const DisplayBooze = ({ alch, toggleModal }) => {
	return (
		<div onClick={(e) => toggleModal(e, alch)} data={alch.id} className="card">
			<h3>{alch.name}</h3>
			<img src={alch.image_thumb_url} alt=""/>
		</div>
	)
}

export default DisplayBooze;