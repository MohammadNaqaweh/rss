import React from 'react';
import parse from 'html-react-parser';
import { Title,JobInfo } from '../index.js';
import './popup.css';

const PopUp = ({ title,country,postedDate,description, link }) => {
  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return ( 
    <>
      <Title title={title}/>
      <JobInfo country={country} postedDate={postedDate}/>
      <div className='jobPosts__table-post_description'>{parse(description)}</div>
      <div className='jobPosts__table-post_button'>
      <button onClick={() => handleClick(link)}>Apply</button>
      </div>
    </>
  )
}

export default PopUp
