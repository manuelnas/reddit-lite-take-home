import React from 'react';
import { shallow, expect } from 'utils/testUtils';
import App from './index';

describe('App', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App match={{ params: { subreddit: 'test' } }} />);
		expect(wrapper.find('div.App')).to.have.lengthOf(1);
	});
});
