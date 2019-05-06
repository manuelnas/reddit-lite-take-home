import { Paper } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COLORS } from 'theme/MuiTheme';

const STYLE = {
	descriptionText: {
		color: 'black',
		margin: '0',
	},
	thumbnail: {
		height: '100px',
		marginRight: '15px',
		width: '100px',
	},
	link: {
		color: COLORS.PRIMARY[400],
		textDecoration: 'none',
	},
	titleText: {
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

class SubredditPosts extends React.PureComponent {
	state = {
		postCount: 25,
		subreddit: null,
	};

	componentDidMount() {
		const { onGetPosts } = this.props;
		const { postCount, subreddit } = this.state;

		onGetPosts(subreddit, postCount);
	}

	static getDerivedStateFromProps(props) {
		const { match } = props;
		const { subreddit } = match.params;

		return {
			subreddit,
		};
	}

	render() {
		const { posts } = this.props;

		console.log(posts);

		return (
			<div>
				{_.map(posts, ({ data }) => (
					<Link
						key={data.name}
						style={STYLE.link}
						to={`https://www.reddit.com${data.permalink}`}
					>
						<Paper
							style={STYLE.paperContainer}
						>
							{data.thumbnail && data.thumbnail.length > 0 && (
								<img
									alt="post thumbnail"
									src={data.thumbnail}
									style={STYLE.thumbnail}
								/>
							)}
							<div style={STYLE.textContainer}>
								<p style={STYLE.titleText}>{data.title}</p>
								<p style={STYLE.descriptionText}></p>
							</div>
						</Paper>
					</Link>
				))}
			</div>
		);
	}
};

SubredditPosts.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			subreddit: PropTypes.string,
		}).isRequired,
	}).isRequired,
	posts: PropTypes.arrayOf(PropTypes.shape({
		data: PropTypes.shape({
			author: PropTypes.string.isRequired,
			created_utc: PropTypes.number.isRequired,
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			thumbnail: PropTypes.string,
			subreddit: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		}),
	})).isRequired,
};

export default SubredditPosts;
