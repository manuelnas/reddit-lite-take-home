import { connect } from 'react-redux';
import immutableToJS from 'utils/immutableToJS';
import { actions } from 'components/DataContainer';
import SubredditPosts from './SubredditPosts';

const mapStateToProps = (state) => ({
	posts: state.get('posts'),
});

const mapDispatchToProps = (dispatch) => ({
	onGetPosts: (...params) => {
		dispatch(actions.actionGetSubredditPosts(...params));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(immutableToJS(SubredditPosts));
