import React from 'react';
import { MyHeader } from '../Elements';
import Filters from '../components/Filters';

const Header = () => {
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
				<img src={require('../assets/logo512.png')} alt='' />
			</div>
		</MyHeader>
	);
};
export default Header;