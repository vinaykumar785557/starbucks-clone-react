import React from 'react';
import './Flavours.css';

const flavours = [
	{
		id: '1',
		image:
			'https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-77660.jpg',
		title: 'Iced shaken awakening',
		description:
			'Introducing our new Iced Toasted Vanilla Oat Shaken Espresso with rich, creamy layers and nondairy goodness.',
	},
	{
		id: '2',
		image:
			'https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-77661.jpg',
		title: 'Cheerfully chill',
		description:
			'Spring sips await with our nondairy Strawberry Coconut Drink, complete with real strawberry pieces and coconut beverage.',
	},
];

function Flavours() {
	return (
		<div className='flavours'>
			{flavours.map((flavour) => {
				return (
					<div className='flavour'>
						<img
							src={flavour.image}
							alt='flavoursphoto'
							className='flavoursphoto'
						/>

						<div className='flavours__text'>
							<h1 className='flavours__title'>{flavour.title}</h1>
							<h3 className='flavours__description'>{flavour.description}</h3>
							<button className='flavours__button'>Order now</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Flavours;
