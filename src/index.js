import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from 'components/App';
import DataContainer from 'components/DataContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
	<BrowserRouter>
		<DataContainer>
			<Route path="/" component={App} />
		</DataContainer>
	</BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
