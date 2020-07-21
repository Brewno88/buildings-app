import React from 'react';
import { MyHeader } from '../Elements';
import Filters from '../components/Filters';

export default function Header() {
	return (
		<MyHeader
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='whole'>
				<div className='left'>
					<h1>Our Offering</h1>
					<Filters />
				</div>
			</div>
		</MyHeader>
	);
}
