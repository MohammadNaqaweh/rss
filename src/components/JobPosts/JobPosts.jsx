import React from 'react';
import { JobPost } from '../index.js'

const JobPosts = ({ jobPosts }) => {
  const style = {
    display: "flex",
    flexWrap: "wrap",
  }
  return (
    <div style={style} id='home'>
      {jobPosts.map((item, index) => (
        <JobPost 
          key={index}
          item={item}
        />
      ))}
    </div>
  )
}

export default JobPosts
