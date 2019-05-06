import { IconButton }  from '@material-ui/core';
import {
	ArrowBackIos as ArrowBack,
	ArrowForwardIos as ArrowForward
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from 'theme/MuiTheme';

const STYLE = {
	container: {
		height: '48px',
		textAlign: 'center',
	},
	currentPageSpan: {
		color: COLORS.PRIMARY[400],
	},
	pageNumberSpan: {
		padding: '0 5px',
		lineHeight: '48px',
		cursor: 'pointer',
	},
	pagesContainer: {
		display: 'inline-block',
		marginRight: '5px',
	},
};

class PagingPanel extends React.PureComponent {
	setNewPage = (pageNr) => {
		const { onPageChange } = this.props;

		onPageChange(pageNr);
	};

	getPages = () => {
		const { hasMore, maxPages, page } = this.props;
		let elements = [];

		for (let i = 0; i <= maxPages; i++) {
			if (i + 1 === maxPages && !hasMore) {
				return;
			}

			elements.push((
				<span
					key={i}
					// eslint-disable-next-line no-loop-func
					onClick={() => this.setNewPage(i)}
					style={{
						...STYLE.pageNumberSpan,
						...((i === page) ? STYLE.currentPageSpan : {})
					}}
				>
					{(i + 1)}
				</span>
			));
		}

		return elements;
	};

	render() {
		const { hasMore, page } = this.props;

		return (
			<div style={STYLE.container}>
				<IconButton
					disabled={page === 0}
					onClick={() => this.setNewPage(page - 1)}
				>
					<ArrowBack />
				</IconButton>

				<div style={STYLE.pagesContainer}>
					{this.getPages()}
				</div>

				<IconButton
					disabled={!hasMore}
					onClick={() => this.setNewPage(page + 1)}
				>
					<ArrowForward />
				</IconButton>
			</div>
		);
	}
}

PagingPanel.propTypes = {
	hasMore: PropTypes.bool.isRequired,
	maxPages: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
};

export default PagingPanel;
