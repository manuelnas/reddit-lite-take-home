import { List, Map } from 'immutable';
import constants from 'components/DataContainer/constants';
import { expect } from 'utils/testUtils';
import reducer, { INITIAL_STATE } from './reducer';

describe('DataContainer.reducer', () => {
	let state;

	beforeEach(() => {
		state = {};
	});

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).to.deep.equal(INITIAL_STATE);
	});

	it('should handle constants.actions.*.requested by setting loading to true and errors to null', () => {
		state = reducer(
			INITIAL_STATE.set('error', { message: 'test error' }),
			{ type: constants.actions.getPosts.requested }
		);

		expect(state).to.deep.equal(INITIAL_STATE.set('loading', true));
	});
	
	const DEFAULT_LISTING_DATA = {
		kind: 'Listing',
		data: {
			children: [
				{ name: 'test item 1' },
				{ name: 'test item 2' },
			],
		},
	};

	it('should handle constants.actions.getSubreddits.succeeded by setting loading to false and save the data.children to state.subreddits', () => {
		state = reducer(
			INITIAL_STATE.set('loading', true),
			{
				type: constants.actions.getSubreddits.succeeded,
				data: DEFAULT_LISTING_DATA.data,
			},
		);

		expect(state).to.deep.equal(INITIAL_STATE.set('subreddits', new List(DEFAULT_LISTING_DATA.data.children)));
	});

	it('should handle constants.actions.getPosts.succeeded by setting loading to false and save the data.children to state.posts', () => {
		state = reducer(
			INITIAL_STATE.set('loading', true),
			{
				type: constants.actions.getPosts.succeeded,
				data: DEFAULT_LISTING_DATA.data,
			},
		);

		expect(state).to.deep.equal(INITIAL_STATE.set('posts', new List(DEFAULT_LISTING_DATA.data.children)));
	});

	it('should handle constants.actions.*.failed by setting loading to false and save the error to state.error', () => {
		const error = { message: 'test error' };
		state = reducer(
			INITIAL_STATE.set('loading', true),
			{
				type: constants.actions.getSubreddits.failed,
				error,
			},
		);

		expect(state).to.deep.equal(INITIAL_STATE.set('error', new Map(error)));
	});
});
