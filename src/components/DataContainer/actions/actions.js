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
const POSTS_URL_AFTER = '&after=';

const actionGetSubredditPosts = (subreddit, postsCount, after) => async (dispatch) => {
	dispatch({
		type: constants.actions.getPosts.requested,
		subreddit,
	});

	let url = `${BASE_URL}${POSTS_URL_BASE}${subreddit}${POSTS_URL_SUFFIX}${postsCount}`;

	if (after) {
		url = `${url}${POSTS_URL_AFTER}${after}`;
	}

	return axios.get(`${url}`)
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

const actionClearPosts = () => async (dispatch) =>{
	dispatch({
		type: constants.actions.clearPosts.requested,
	});
};

export default {
	BASE_URL,

	SUBREDDITS_URL,
	actionGetSubreddits,

	POSTS_URL_BASE,
	POSTS_URL_SUFFIX,
	actionGetSubredditPosts,

	actionClearPosts,
};