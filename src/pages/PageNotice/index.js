import React from 'react';

import { Notice } from './Notice';

import './style.css';

export const PageNotice = ({ info }) => {
	return (
		<div className='content-page-notice'>
			{info.map((notice, index) => (
				<Notice key={index} notice={notice} />
			))}
		</div>
	);
};
