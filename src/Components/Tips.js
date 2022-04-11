import React from 'react';
import './Tips.css';
function Tips() {
	return (
		<div className='tips'>
			<div className='tips__textcontainer'>
				<h1 className='tips__title'>Planet-positive tips</h1>
				<p className='tips__description'>
					April is earth month, but our commitment to reducing our environmental
					impact is year round. Try these tips on your next Starbucks visit.
				</p>
				<button className='tips__button'>Learn how</button>
			</div>
			<img
				className='tips__image'
				src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-77659.jpg'
				alt='tips'
			/>
		</div>
	);
}

export default Tips;
