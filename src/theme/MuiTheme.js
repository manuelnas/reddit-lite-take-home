import {
	lightBlue, deepOrange, blueGrey, green,
} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const COLORS = {
	PRIMARY: lightBlue,
	SECONDARY: blueGrey,
	GREY: blueGrey,
	ERROR: deepOrange,
	SUCCESS: green,
};

const muiConfig = {
	// Change the font
	fontFamily: "'Open Sans', Helvetica, Arial, Lucida, sans-serif",

	// Configure the color palette
	palette: {
		common: {},
		primary: COLORS.PRIMARY,
		secondary: COLORS.SECONDARY,
		grey: COLORS.GREY,
		error: COLORS.ERROR,
		success: COLORS.SUCCESS,
	},

	// Use the new typographies.
	typography: {
		useNextVariants: true,
	},
};

const THEME = createMuiTheme(muiConfig);

export { COLORS, THEME };
