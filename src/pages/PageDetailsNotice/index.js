import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import './style.css';

export const PageDetailsNotice = ({ info }) => {
	let { id } = useParams();
	const objNotice = info.find((x) => {
		return x.id === parseInt(id);
	});

	if (Object.keys(objNotice).length === 0) {
		return <div>Cargando...</div>;
	}

	return (
		<div className='content'>
			<div className='content-details'>
				<ReactPlayer url={objNotice.video} width='100%' controls={true} playing={false} />
				<p className='title'>{objNotice.title}</p>
				<p className='text-body'>{objNotice.body}</p>
			</div>
		</div>
	);
};
