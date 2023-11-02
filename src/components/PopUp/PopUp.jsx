import React from 'react';
import parse from 'html-react-parser';
import { Title,JobInfo } from '../index.js';
import { redirectToPost } from '../../utils/utils.js'
import './popup.css';

const PopUp = ({ title,country,postedDate,description, link }) => {
  return ( 
    <>
      <Title title={title}/>
      <JobInfo country={country} postedDate={postedDate}/>
      <div className='jobPosts__table-post_description'>{parse(description)}</div>
      <div className='jobPosts__table-post_button'>
      <button onClick={() => redirectToPost(link)}>Apply</button>
      </div>
    </>
  )
}

export default PopUp
