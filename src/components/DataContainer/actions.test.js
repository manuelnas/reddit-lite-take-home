import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'utils/testUtils';
import * as actions from './actions';
import constants from './constants';

const mockStore = configureMockStore([thunk]);

describe('DataContainer.actions', () => {
	const mock = new MockAdapter(axios);
	const store = mockStore({ data: {}, error: {} });

	beforeEach(() => {
		mock.reset();
		store.clearActions();
	});

	describe('actionGetSubreddits', () => {
		const fetchBody = { kind: 'Listing', data: [{ name: 'subreddit' }] };

		it('creates "constants.actions.getSubreddits.requested" before and "constants.actions.getSubreddits.succeeded" with the body data on success', () => {
			mock.onGet(`${actions.BASE_URL}${actions.SUBREDDITS_URL}`).reply(200, fetchBody);

			const expectedActions = [
				{ type: constants.actions.getSubreddits.requested },
				{ type: constants.actions.getSubreddits.succeeded, data: fetchBody },
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
});