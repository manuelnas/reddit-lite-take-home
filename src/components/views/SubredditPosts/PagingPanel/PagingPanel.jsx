	ArrowForwardIos as ArrowForward
import PropTypes from 'prop-types';
import React from 'react';

const STYLE = {
	container: {
		height: '40px',
		textAlign: 'center',
	},
};

class PagingPanel extends React.PureComponent {
	render() {
		return (
			<div style={STYLE.container}>
			</div>
		);
	}
}

PagingPanel.propTypes = {
	page: PropTypes.number,
	onPageChange: PropTypes.func,
};

export default PagingPanel;
