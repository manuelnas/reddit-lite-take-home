import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import DataContainer from 'components/DataContainer';
import { THEME } from 'theme/MuiTheme';

class App extends React.PureComponent {

	render() {
		const { match } = this.props;
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
	}
}

export default App;
