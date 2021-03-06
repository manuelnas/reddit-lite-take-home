import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from 'components/Error';
import Header from 'components/Header';
import Loading from 'components/Loading';
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
	const { error, history, loading } = props;

	return (
		<MuiThemeProvider theme={THEME}>
			<Header history={history} loading={loading} />
			<div style={STYLE.container} className="App">
				{!!error && <Error message={error.message} />}
				{loading && <Loading />}
				<Switch>
					<Route path="/r/:subreddit" component={views.SubredditPosts} />
					<Route path="/" component={views.Subreddits} />
				</Switch>
			</div>
		</MuiThemeProvider>
	);
};

App.propTypes = {
	error: PropTypes.shape({
		message: PropTypes.string,
	}),
	history: PropTypes.object,
	loading: PropTypes.bool,
};

export default App;
