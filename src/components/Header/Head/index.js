import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const Head = () => {
	return (
		<Link to='/'>
			<div className='head-div'>
				<h1>La Republica</h1>
			</div>
		</Link>
	);
};
