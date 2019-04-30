import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer from './reducer';

class DataContainer extends React.PureComponent {
	constructor(props) {
		super(props);

		// Create the store, using the devtools compose and the saga middleware
		this.store = createStore(
			reducer,
			undefined,
			compose(applyMiddleware(thunk)),
		);
	}

	render() {
		const { children } = this.props;
		return (
			<Provider store={this.store}>
				{children}
			</Provider>
		);
	}
}

DataContainer.propTypes = {
	children: PropTypes.element.isRequired,
};

export default DataContainer;
