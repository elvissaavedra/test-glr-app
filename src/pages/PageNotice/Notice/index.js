import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import './style.css';

export const Notice = ({ notice }) => {
	return (
		<div key={notice.id} className='content-notice'>
			<ReactPlayer url={notice.video} width='100%' height='300px' controls={true} playing={false} />
			<Link to={'/' + notice.id}>
				<p className='title'>{notice.title}</p>
				<p className='text-body'>{notice.body}</p>
			</Link>
		</div>
	);
};
