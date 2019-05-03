import { Iterable } from 'immutable';
import _ from 'lodash';
import React from 'react';

/**
 * A higher-order component that automatically converts any immutable.js props to plain javascript objects.
 *
 * For more information on why to use this, see
 * https://redux.js.org/docs/recipes/UsingImmutableJS.html#use-a-higher-order-component-to-convert-your-smart-components-immutablejs-props-to-your-dumb-components-javascript-props.
 */
export default (Component) => {
	const Wrapper = (props) => {
		const newProps = _.mapValues(props, (value) => (Iterable.isIterable(value) ? value.toJS() : value));
		return <Component {...newProps} />;
	};

	Wrapper.displayName = `immutableToJS(${Component.displayName || Component.name || 'Unknown'}`;
	return Wrapper;
};
