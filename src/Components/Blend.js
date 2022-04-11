import React from 'react';
import './Blend.css';
function Blend() {
	return (
		<div className='blend'>
			<img
				className='blend__coffeeimage'
				src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-77700.jpg'
				alt='blendcoffee'
			/>

			<div className='blend__text'>
				<h2 className='blend__title'>Taste of tomorrow</h2>
				<p className='blend__description'>
					The trailblazing Starbucks Odyssey BlendTM/MC boldly envisions a more
					sustainable future for the coffee industry.
				</p>
				<button className='blend__button'>Order now</button>
			</div>
		</div>
	);
}

export default Blend;
