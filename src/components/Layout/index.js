import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import './style.css';

export const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
