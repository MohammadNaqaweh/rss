import React, { useState } from 'react';
import { PopUp,Title,JobInfo } from '../index.js';
import ReactModel from 'react-modal';
import './jobpost.css'

const JobPost = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const title = item.item.title;
  const country = item.item.country;
  const postedDate = item.item.posted_date;
  const description = item.item.description;
  const link = item.item.link;

  return (
    <>
      <div className='jobPosts__table-post section__margin section__padding' onClick={() => setIsOpen(true)}>
        <Title title={title} />
        <JobInfo country={country} postedDate={postedDate} />
      </div>
      <ReactModel
        isOpen={isOpen}
        contentLabel='example'
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        style={
          { 
          content: {
          top: '80px',
          bottom: '80px',
          left: '80px',
          right: '80px',
          padding: '1rem', 
          }
        }
        }
      >
        <PopUp title={title} country={country} postedDate={postedDate} description={description} link={link}/>
      </ReactModel>
    </>
  )
}

export default JobPost
