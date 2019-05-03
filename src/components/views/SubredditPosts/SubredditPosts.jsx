import React from 'react';
import PropTypes from 'prop-types';

class SubredditPosts extends React.PureComponent {
	state = {
		subreddit: null,
	};

	static getDerivedStateFromProps(props) {
		const { match } = props;
		const { subreddit } = match.params;

		return {
			subreddit,
		};
	}

	render() {
		const { subreddit } = this.state;

		return (
			<div>{subreddit}</div>
		);
	}
};

SubredditPosts.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			subreddit: PropTypes.string,
		}).isRequired,
	}).isRequired,
};

export default SubredditPosts;
