import { List, Map } from 'immutable';

const initialState = new Map({
	error: null,
	loading: false,
	pageSize: 25,
	page: 1,
	posts: new List(),
});

export default (state, action) => {
	if (state === undefined) {
		return initialState;
	}

	switch(action.type) {
		default:
			return state;
	}
};