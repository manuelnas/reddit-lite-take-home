import React from 'react';
import DataContainer from 'components/DataContainer';

class App extends React.PureComponent {
	render() {
		const { match } = this.props;
		const { subreddit } = match.params;

		return (
			<DataContainer>
					<div className="App">
						{subreddit}
					</div>
			</DataContainer>
		);
	}
}

export default App;
