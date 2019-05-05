export default {
	actions: {
		getSubreddits: {
			requested: 'DATA_CONTAINER_GET_SUBREDDITS_REQUESTED',
			succeeded: 'DATA_CONTAINER_GET_SUBREDDITS_SUCCEEDED',
			failed: 'DATA_CONTAINER_GET_SUBREDDITS_FAILED',
		},
		getPosts: {
			requested: 'DATA_CONTAINER_GET_POSTS_REQUESTED',
			succeeded: 'DATA_CONTAINER_GET_POSTS_SUCCEEDED',
			failed: 'DATA_CONTAINER_GET_POSTS_FAILED',
		},
		clearPosts: {
			requested: 'DATA_CONTAINER_CLEAR_POSTS_REQUESTED',
		},
	},
};