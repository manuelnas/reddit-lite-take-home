import { connect } from 'react-redux';
import immutableToJS from 'utils/immutableToJS';
import { actions } from 'components/DataContainer';
import Header from './Header';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
	onBackButtonClicked: () => {
		dispatch(actions.actionClearPosts());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(immutableToJS(Header));
