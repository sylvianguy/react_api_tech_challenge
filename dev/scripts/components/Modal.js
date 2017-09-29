import React from 'react';

import DisplayInfo from './DisplayInfo';

// 1. Get the selectStore and inventoryCount as props
const Modal = ({ 
	stores,
	getStores,
	city,
	sent, 
	chosenAlch, 
	closeModal
}) => {
	return (
		<div className="modal">
			
			<form onSubmit={(e) => getStores(e)}>
				<i onClick={closeModal} className="fa fa-times"></i>
				<figure>
					<img src={chosenAlch.image_thumb_url} alt=""/>
				</figure>
				<div className="modal__bottom">
					<label htmlFor="">Enter your postal code to find stores near you!</label>
					<input onChange={(e) => city(e)} type="text" placeholder="e.g L6T1M8" />
					<input type="submit"/>
					<DisplayInfo display={sent === true}>
						<label htmlFor="" className="labelWrapper">
							{/* 
							  2. Call the selectStore method inside of the select element
							  3. pass the event back to the method
							*/}
							<select defaultValue="default" name="" id="">
								<option value="default">Choose a Location</option>
								{stores.map((store) => {
									return <option key={store.id} value={store.id}>{store.address_line_1}</option>
								})}
							</select>
							<i className="fa fa-caret-down"></i>
						</label>
					</DisplayInfo>
					{/* 
						4. Use the the DisplayInfo component to display the inventory count 
						only when the user select a location
						5. Display the inventory count here inside of an <h4> tag
					*/}  
				</div>
			</form>
		</div>	
	)
}

export default Modal;