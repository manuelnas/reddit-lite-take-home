import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import DataContainer from 'components/DataContainer';
import { THEME } from 'theme/MuiTheme';

const App = (props) => {
	const { match } = props;
	const { subreddit } = match.params;

	return (
		<DataContainer>
			<MuiThemeProvider theme={THEME}>
				<div className="App">
					{subreddit}
				</div>
			</MuiThemeProvider>
		</DataContainer>
	);
};

App.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			subreddit: PropTypes.string,
		}).isRequired,
	}).isRequired,
};

export default App;
