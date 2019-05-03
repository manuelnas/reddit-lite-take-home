import { Error } from '@material-ui/icons';
import React from 'react';

const STYLE = {
	text: {
		display: 'inline-block',
		margin: '0px 10px',
	},
};

const Loading = (props) => {
	const { message } = props;

	return (
		<div>
			<Error fontSize="large" color="error" />
			<p style={STYLE.text}>{message}</p>
		</div>
	);
}

export default Loading;