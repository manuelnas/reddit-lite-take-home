import { Paper } from '@material-ui/core';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from 'theme/MuiTheme';

const STYLE = {
	descriptionText: {
		color: 'black',
		margin: '0',
	},
	icon: {
		height: '100px',
		marginRight: '15px',
		width: '100px',
	},
	link: {
		color: COLORS.PRIMARY[400],
		textDecoration: 'none',
	},
	nameText: {
		margin: '0 0 5px 0',
	},
	paperContainer: {
		padding: '10px',
		margin: '10px',
	},
	textContainer: {
		display: 'inline-block',
		maxWidth: 'calc(100% - 115px)',
		verticalAlign: 'top',
	},
};

const INTERVAL_TIME = 60 * 1000;

class Subreddits extends React.PureComponent {
	componentDidMount() {
		this.getData();
		
		// Set an interval to reload the subreddits every INTERVAL_TIME milliseconds.
		this.interval = window.setInterval(() => {
			this.getData();
		}, INTERVAL_TIME);
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	/**
	 * Retrieve or reload the subreddits.
	 */
	getData() {
		const { onGetSubreddits } = this.props;

		onGetSubreddits();
	}

	render() {
		const { subreddits } = this.props;

		console.log(subreddits);

		return (
			<div>
				{_.map(subreddits, ({ data }) => (
					<Link
						key={data.name}
						style={STYLE.link}
						to={data.url}
					>
						<Paper style={STYLE.paperContainer}>
							{data.community_icon && data.community_icon.length > 0 && (
								<img
									alt={`${data.display_name_prefixed} subreddit icon`}
									src={data.community_icon}
									style={STYLE.icon}
								/>
							)}
							<div style={STYLE.textContainer}>
								<p style={STYLE.nameText}>{data.display_name_prefixed}</p>
								<p style={STYLE.descriptionText}>{data.public_description}</p>
							</div>
						</Paper>
					</Link>
				))}
			</div>
		);
	}
};

Subreddits.propTypes = {
	subreddits: PropTypes.arrayOf(PropTypes.shape({
		data: PropTypes.shape({
			community_icon: PropTypes.string,
			display_name_prefixed: PropTypes.string.isRequired,
			link: PropTypes.string,
			name: PropTypes.string,
			public_description: PropTypes.string,
			to: PropTypes.string,
		}),
	})).isRequired,
	onGetSubreddits: PropTypes.func.isRequired,
};

export default Subreddits;
