import React from 'react';
import { shallow, expect } from 'utils/testUtils';
import DataContainer from './index';

describe('DataContainer', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<DataContainer><div className="DataContainerTest"></div></DataContainer>);
		expect(wrapper.find('div.DataContainerTest')).to.have.lengthOf(1);
	});
});
