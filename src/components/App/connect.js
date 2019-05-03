import { connect } from 'react-redux';
import immutableToJS from 'utils/immutableToJS';
import App from './App';

const mapStateToProps = (state) => ({
	loading: state.get('loading'),
	error: state.get('error'),
});

const mapDispatchToProps = () => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(immutableToJS(App));
