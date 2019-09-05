import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import { cutText } from '../../../utils/functions'

import './PostSummary.scss';

const PostSummary = ({ id, title, author, content }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <p>Author: {author}</p>
    <HtmlBox>{cutText(content, 50)}</HtmlBox>
    <Button variant="primary">
      <Link to={`/posts/${id}`}>Read more</Link>
    </Button>
    <Button variant="primary">
      <Link to={`/posts/edit/${id}`}>Update post</Link>
    </Button>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default PostSummary;