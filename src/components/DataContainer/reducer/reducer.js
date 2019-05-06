import { List, Map } from 'immutable';
import constants from 'components/DataContainer/constants';

export const INITIAL_STATE = new Map({
	error: null,
	loading: false,
	subreddits: new List(),
	subreddit: null,
	posts: new List(),
});

/**
 * Initiates and updates the state based on the action.
 *
 * @param {Object} state - The state that should be updated.
 * @param {Object} action - The action describing what should be updated (and how).
 */
export default (state, action) => {
	if (state === undefined) {
		return INITIAL_STATE;
	}

	switch(action.type) {
		case constants.actions.getSubreddits.requested:
			return state
				.set('loading', true)
				.set('error', null);
		case constants.actions.getPosts.requested:
			return state
				.set('loading', true)
				.set('error', null)
				.set('subreddit', action.subreddit);
		case constants.actions.getSubreddits.succeeded:
			return state
				.set('loading', false)
				.set('subreddits', new List(action.data.children));
		case constants.actions.getPosts.succeeded:
			return state
				.set('loading', false)
				.set('posts', new List(action.data.children));
		case constants.actions.getSubreddits.failed:
		case constants.actions.getPosts.failed:
			return state
				.set('loading', false)
				.set('error', Map(action.error));
		case constants.actions.clearPosts.requested:
			return state
				.set('posts', new List());
		default:
			return state;
	}
};