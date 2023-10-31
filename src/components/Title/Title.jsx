import React from 'react';
import './title.css';

const Title = ({ title }) => {
  return (
    <div className='jobPosts__table-post_title section__margin-bottom'>
      <h1>{title}</h1>
    </div>
  )
}

export default Title
