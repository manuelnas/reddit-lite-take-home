import { CircularProgress } from '@material-ui/core';
import React from 'react';

const STYLE = {
	text: {
		display: 'inline-block',
		margin: '0 20px',
	},
};

const Loading = () => {
	return (
		<div>
			<CircularProgress />
			<p style={STYLE.text}>Loading...</p>
		</div>
	);
}

export default Loading;