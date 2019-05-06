import { Paper, Tooltip } from '@material-ui/core';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from 'theme/MuiTheme';
import PagingPanel from './PagingPanel';

const STYLE = {
	link: {
		color: COLORS.PRIMARY[400],
		textDecoration: 'none',
	},
	paperContainer: {
		padding: '10px',
		margin: '10px',
		cursor: 'pointer',
	},
	subText: {
		color: 'black',
		fontSize: '12px',
		margin: '0',
	},
	subTextSpan: {
		display: 'inline-block',
		marginRight: '10px',
		padding: '5px',
		lineHeight: '30px',
	},
	textContainer: {
		display: 'inline-block',
		maxWidth: 'calc(100% - 115px)',
		verticalAlign: 'top',
	},
	thumbnail: {
		maxHeight: '100px',
		marginRight: '15px',
		maxWidth: '100px',
	},
	titleText: {
		margin: '0 0 5px 0',
	},
};

const INTERVAL_TIME = 60 * 1000;

class SubredditPosts extends React.PureComponent {
	state = {
		after: [],
		page: 0,
		postCount: 25,
		scrollY: 0,
		subreddit: null,
	};

	static getDerivedStateFromProps(props) {
		const { match } = props;
		const { subreddit } = match.params;

		return {
			scrollY: document.documentElement.scrollTop,
			subreddit,
		};
	}

	componentDidMount() {
		this.getData();

		// Set an interval to reload the subreddit's posts every INTERVAL_TIME milliseconds.
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
	getData = () => {
		const { onGetPosts, posts } = this.props;
		const { after, page, postCount, subreddit } = this.state;

		let afterCode = after[page];

		if (!afterCode && page !== 0) {
			afterCode = posts[posts.length - 1].data.name;
			after[page] = afterCode;
		} else {
			afterCode = afterCode;
		}

		onGetPosts(subreddit, postCount, afterCode);

		console.log(posts, afterCode, page);
	};

	handlePageChange = (newPage) => {
		this.setState({ page: newPage }, () => this.getData());
	};

	getPagingPanel = () => {
		const { posts } = this.props;
		const { after, page, postCount } = this.state;

		return (
			<PagingPanel
				hasMore={posts.length >= postCount}
				maxPages={after.length + 1}
				onPageChange={this.handlePageChange}
				page={page}
			/>
		);
	};

	goToPage = (url, event) => {
		window.location.href = url;
		event.stopPropagation();
		return false;
	};

	render() {
		const { posts } = this.props;
		const { scrollY } = this.state;

		return (
			<React.Fragment>
				{this.getPagingPanel()}
				{_.map(posts, ({ data }) => {
					const posted = moment(data.created_utc * 1000);

					return (
						<Paper
							key={data.name}
							onClick={(event) => this.goToPage(data.url, event)}
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
								<p style={STYLE.subText}>
									<span
										onClick={(event) => this.goToPage(
											`https://www.reddit.com/r/${data.subreddit}/comments/${data.id}/`,
											event,
										)}
										style={{ ...STYLE.subTextSpan, ...STYLE.link }}
									>
										Comments
									</span>
									<span
										style={STYLE.subTextSpan}
									>
										Author:&nbsp;
										<span
											onClick={(event) => this.goToPage(
												`https://www.reddit.com/user/${data.author}/`,
												event,
											)}
											style={STYLE.link}
										>
											u/{data.author}
										</span>
									</span>
									<span style={STYLE.subTextSpan}>
										Posted:&nbsp;
										<Tooltip
											title={posted.format('llll')}
										>
											<span>{moment.duration(posted.diff()).humanize(true)}</span>
										</Tooltip>
									</span>
								</p>
							</div>
						</Paper>
					);
				})}
				{this.getPagingPanel()}
				<script>window.scrollTo(0, {scrollY});</script>
			</React.Fragment>
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
