import axios from 'axios';
import constants from './constants';

export const BASE_URL = 'https://www.reddit.com';

export const SUBREDDITS_URL = '/subreddits/popular/.json';

export const actionGetSubreddits = () =>  async (dispatch) => {
	dispatch({
		type: constants.actions.getSubreddits.requested,
	});

	return axios.get(`${BASE_URL}${SUBREDDITS_URL}`)
		.then((response) => {
			dispatch({
				type: constants.actions.getSubreddits.succeeded,
				data: response.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: constants.actions.getSubreddits.failed,
				error,
			});
		});
};

export const POSTS_URL_BASE = '/r/';
export const POSTS_URL_SUFFIX = '/.json?count=';

export const actionGetSubredditPosts = (subreddit, postsCount) => async (dispatch) => {
	dispatch({
		type: constants.actions.getPosts.requested,
	});

	return axios.get(`${BASE_URL}${POSTS_URL_BASE}${subreddit}${POSTS_URL_SUFFIX}${postsCount}`)
		.then((response) => {
			dispatch({
				type: constants.actions.getPosts.succeeded,
				data: response.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: constants.actions.getPosts.failed,
				error,
			});
		});
};
