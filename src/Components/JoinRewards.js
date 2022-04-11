import React from 'react';
import './JoinRewards.css';
function JoinRewards() {
	return (
		<div className='rewards'>
			<img
				src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-77593.jpg'
				alt='rewards'
				className='rewards__poster'
			/>

			<div className='rewards__text'>
				<h1>Turn your usual into free faves*</h1>
				<button>Join Starbucks® Rewards </button>
			</div>
		</div>
	);
}

export default JoinRewards;
