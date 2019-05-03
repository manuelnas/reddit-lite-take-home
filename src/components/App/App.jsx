import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DataContainer from 'components/DataContainer';
import views from 'components/views';
import { THEME } from 'theme/MuiTheme';

const App = (props) => {
	return (
		<DataContainer>
			<MuiThemeProvider theme={THEME}>
				<div className="App">
					<Switch>
						<Route path="/r/:subreddit" component={views.SubredditPosts} />
						<Route path="/" component={views.Subreddits} />
					</Switch>
				</div>
			</MuiThemeProvider>
		</DataContainer>
	);
};

App.propTypes = {
};

export default App;
