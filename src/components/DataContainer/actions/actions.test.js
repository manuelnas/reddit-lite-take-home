import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import constants from 'components/DataContainer/constants';
import { expect } from 'utils/testUtils';
import actions from './index';

const mockStore = configureMockStore([thunk]);

describe('DataContainer.actions', () => {
	const mock = new MockAdapter(axios);
	const store = mockStore({ data: {}, error: {} });

	beforeEach(() => {
		mock.reset();
		store.clearActions();
	});

	describe('actionGetSubreddits', () => {
		const fetchBody = { kind: 'Listing', data: { children: [{ name: 'subreddit' }] } };

		it('creates "constants.actions.getSubreddits.requested" before and "constants.actions.getSubreddits.succeeded" with the body data on success', () => {
			mock.onGet(`${actions.BASE_URL}${actions.SUBREDDITS_URL}`).reply(200, fetchBody);

			const expectedActions = [
				{ type: constants.actions.getSubreddits.requested },
				{ type: constants.actions.getSubreddits.succeeded, data: fetchBody.data },
			];

			return store.dispatch(actions.actionGetSubreddits()).then(() => {
				expect(store.getActions()).to.deep.equal(expectedActions);
			});
		});

		it('creates "constants.actions.getSubreddits.requested" before and "constants.actions.getSubreddits.failed" with an error message on failing', () => {
			mock.onGet(`${actions.BASE_URL}/shouldFail/${actions.SUBREDDITS_URL}`).reply(200, fetchBody);

			return store.dispatch(actions.actionGetSubreddits()).then(() => {
				const storeActions = store.getActions();

				expect(storeActions).to.have.lengthOf(2);
				expect(storeActions[0].type).to.equal(constants.actions.getSubreddits.requested);
				expect(storeActions[1].type).to.equal(constants.actions.getSubreddits.failed);
				expect(storeActions[1].error).to.not.equal(undefined);
				expect(storeActions[1].error).to.include({ message: 'Request failed with status code 404' });
			});
		});
	});

	describe('actionGetSubredditPosts', () => {
		const subredditName = 'test subreddit';
		const postsCount = 25;
		const fetchBody = { kind: 'Listing', name: subredditName };

		it('creates "constants.actions.getPosts.requested" before and "constants.actions.getPosts.succeeded" with the body data on success', () => {
			mock.onGet(`${actions.BASE_URL}${actions.POSTS_URL_BASE}${subredditName}${actions.POSTS_URL_SUFFIX}${postsCount}`).reply(200, fetchBody);

			const expectedActions = [
				{ type: constants.actions.getPosts.requested, subreddit: subredditName },
				{ type: constants.actions.getPosts.succeeded, data: fetchBody.data },
			];

			return store.dispatch(actions.actionGetSubredditPosts(subredditName, postsCount)).then(() => {
				expect(store.getActions()).to.deep.equal(expectedActions);
			});
		});

		it('creates "constants.actions.getPosts.requested" before and "constants.actions.getPosts.failed" with an error message on failing', () => {
			mock.onGet(`${actions.BASE_URL}/shouldFail/${actions.POSTS_URL_BASE}${subredditName}${actions.POSTS_URL_SUFFIX}${postsCount}`).reply(200, fetchBody);

			return store.dispatch(actions.actionGetSubredditPosts(subredditName, postsCount)).then(() => {
				const storeActions = store.getActions();
				
				expect(storeActions).to.have.lengthOf(2);
				expect(storeActions[0].type).to.equal(constants.actions.getPosts.requested);
				expect(storeActions[1].type).to.equal(constants.actions.getPosts.failed);
				expect(storeActions[1].error).to.not.equal(undefined);
				expect(storeActions[1].error).to.include({ message: 'Request failed with status code 404' });
			});
		});
	});
});