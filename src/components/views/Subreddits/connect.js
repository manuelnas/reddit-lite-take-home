import { connect } from 'react-redux';
import immutableToJS from 'utils/immutableToJS';
import { actions } from 'components/DataContainer';
import Subreddits from './Subreddits';

const mapStateToProps = (state) => ({
	subreddits: state.get('subreddits'),
});

const mapDispatchToProps = (dispatch) => ({
	onGetSubreddits: (...params) => {
		dispatch(actions.actionGetSubreddits(...params));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(immutableToJS(Subreddits));
