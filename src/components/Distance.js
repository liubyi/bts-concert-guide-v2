import React from 'react';


const Distance = ({ distance }) => {

	return (
		<div className="distance-text">
			<div key={distance}>{distance}</div>
		</div>
	);

};

export default Distance;


