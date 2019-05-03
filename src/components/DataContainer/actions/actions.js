import axios from 'axios';
import constants from 'components/DataContainer/constants';

const BASE_URL = 'https://www.reddit.com';

const SUBREDDITS_URL = '/subreddits/popular/.json';

const actionGetSubreddits = () =>  async (dispatch) => {
	dispatch({
		type: constants.actions.getSubreddits.requested,
	});

	return axios.get(`${BASE_URL}${SUBREDDITS_URL}`)
		.then((response) => {
			dispatch({
				type: constants.actions.getSubreddits.succeeded,
				data: response.data.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: constants.actions.getSubreddits.failed,
				error,
			});
		});
};

const POSTS_URL_BASE = '/r/';
const POSTS_URL_SUFFIX = '/.json?count=';

const actionGetSubredditPosts = (subreddit, postsCount) => async (dispatch) => {
	dispatch({
		type: constants.actions.getPosts.requested,
	});

	return axios.get(`${BASE_URL}${POSTS_URL_BASE}${subreddit}${POSTS_URL_SUFFIX}${postsCount}`)
		.then((response) => {
			dispatch({
				type: constants.actions.getPosts.succeeded,
				data: response.data.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: constants.actions.getPosts.failed,
				error,
			});
		});
};

export default {
	BASE_URL,

	SUBREDDITS_URL,
	actionGetSubreddits,

	POSTS_URL_BASE,
	POSTS_URL_SUFFIX,
	actionGetSubredditPosts,
};