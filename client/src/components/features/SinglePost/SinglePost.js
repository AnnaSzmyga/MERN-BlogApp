import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

import './SinglePost.scss';


class SinglePost extends React.Component {

  componentDidMount() {
    const { resetRequest, loadSinglePost, match } = this.props;
    resetRequest();
    loadSinglePost(match.params.id);
  }

  render() {
    const { singlePost, request } = this.props;
    return (
      <div>
        {request.pending && (request.success === null) && <Spinner />}
        {!request.pending && request.success && (singlePost) && (
          <div className="single-post">
              <PageTitle>{singlePost.title}</PageTitle>
              <p>{`Author: ${singlePost.author}`}</p>
              <HtmlBox>{singlePost.content}</HtmlBox>
          </div>
        )}
        {!request.pending && (request.error !== null) && <Alert variant="info">{request.error}</Alert>}
        {!request.pending && request.success && (!singlePost) && <Alert variant="info">No such a post!</Alert>}
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