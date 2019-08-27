import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    return (
      <div>Posts amount: {this.props.postsAmount}</div>
    );
  }

};


PostsCounter.propTypes = {
  postsAmount: PropTypes.number.isRequired,
  loadPosts: PropTypes.func.isRequired
};

export default PostsCounter;



