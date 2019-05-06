import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { ArrowBackIos as ArrowBack } from '@material-ui/icons';
import _ from 'lodash';
import React from 'react';

class Header extends React.PureComponent {
	state = {
		showBackButton: false,
		title: 'Subreddits',
	};

	static getDerivedStateFromProps() {
		const URLParts = _.chain(window.location.pathname)
			.trim('/')
			.split('/')
			.value();

		if (URLParts.length === 2) {
			return {
				showBackButton: true,
				title: _.join(URLParts, '/'),
			};
		}

		return {
			showBackButton: false,
			title: 'Subreddits',
		};
	}

	/**
	 * Click handler that is triggered when the back button in the header is clicked.
	 */
	handleBackButtonClick = () => {
		const { history, onBackButtonClicked } = this.props;

		onBackButtonClicked();
		history.push('/');
	};

	render() {
		const { showBackButton, title } = this.state;

		return (
			<AppBar>
				<Toolbar>
					<IconButton onClick={this.handleBackButtonClick}>
						{showBackButton && <ArrowBack />}
					</IconButton>
					<Typography variant="h6">{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	}
};

export default Header;