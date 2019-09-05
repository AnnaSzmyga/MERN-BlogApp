import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostForm from '../../features/PostForm/PostFormContainer';

const EditPostPage = () => (
  <div>
    <PageTitle>Update Post</PageTitle>
    <PostForm edit={true} />
  </div>
);

export default EditPostPage;