import React from 'react';
import { MyHeader } from '../Elements';
import Filters from '../components/Filters';
import { Link, Route } from 'react-router-dom';

const Header = () => {
	return (
		<MyHeader
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='whole'>
				<div className='left'>
					<Link to='/'>
						<h1>Our Offering</h1>
					</Link>
					<Link to='/MainPage'>Edit Buildings</Link>
					<Route path='/' exact component={Filters} />
				</div>
				<img src={require('../assets/logo512.png')} alt='' />
			</div>
		</MyHeader>
	);
};
export default Header;
