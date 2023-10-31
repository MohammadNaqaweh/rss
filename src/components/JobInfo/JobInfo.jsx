import React from 'react';
import './job-info.css';

const JobInfo = ({ country,postedDate }) => {
  return (
    <div className='jobPosts__table-post_info'>
      <p>{country}</p>
      <p className='section__margin-left'>{postedDate}</p>
    </div>
  )
}

export default JobInfo
