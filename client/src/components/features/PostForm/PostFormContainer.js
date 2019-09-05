import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest, addPostRequest, editPostRequest, resetRequest } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  post: getSinglePost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadSinglePost: () => dispatch(loadSinglePostRequest()),
  addPost: (post) => dispatch(addPostRequest(post)),
  editPost: (post) => dispatch(editPostRequest(post)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);