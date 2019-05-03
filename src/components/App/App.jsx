import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import views from 'components/views';
import { THEME } from 'theme/MuiTheme';

const STYLE = {
	container: {
		position: 'absolute',
		top: '64px',
		left: '0',
		right: '0',
		padding: '10px',
	},
};

const App = (props) => {
	const { history } = props;

	return (
		<MuiThemeProvider theme={THEME}>
			<Header history={history} />
			<div style={STYLE.container} className="App">
				<Switch>
					<Route path="/r/:subreddit" component={views.SubredditPosts} />
					<Route path="/" component={views.Subreddits} />
				</Switch>
			</div>
		</MuiThemeProvider>
	);
};

App.propTypes = {
	history: PropTypes.object,
};

export default App;
