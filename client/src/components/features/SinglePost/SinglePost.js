import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

import './SinglePost.scss';


class SinglePost extends React.Component {

  componentDidMount() {
    const { resetRequest, loadSinglePost } = this.props;
    resetRequest();
    loadSinglePost();
  }

  render() {
    const { post, request } = this.props;
    console.log(post);
    return (
      <div>
        {request.pending && (request.success === null) && <Spinner />}
        {!request.pending && request.success && (post) &&
          <div className="single-post">
              <PageTitle>{post.title}</PageTitle>
              <p>{`Author: ${post.author}`}</p>
              <HtmlBox>{post.content}</HtmlBox>
          </div>
        }
        {!request.pending && (request.error !== null) && <Alert>{request.error}</Alert>}
        {!request.pending && request.success && (!post) && <Alert>No such a post!</Alert>}
      </div>
    );
  }

};

SinglePost.propTypes = {
  post: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadSinglePost: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired,
};

export default SinglePost;