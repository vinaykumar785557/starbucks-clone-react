import React from 'react';
import './Remainder.css';
function Remainder() {
	return (
		<div className='remainder'>
			*At participating stores. Some restrictions apply.{' '}
			<a className='link' href='/'>
				See starbucks.ca/rewards
			</a>{' '}
			for details.
		</div>
	);
}

export default Remainder;
