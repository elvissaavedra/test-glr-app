import React from 'react';

import { Banner } from './Banner';
import { Head } from './Head';
import { Navbar } from './Navbar';

export const Header = () => {
	return (
		<header className='content'>
			<Head />
			<Navbar />
			<Banner />
		</header>
	);
};
