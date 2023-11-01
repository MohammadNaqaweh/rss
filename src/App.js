import React, { useEffect, useState } from 'react';
import './App.css';
import { JobPost } from './components';
import {getJobPosts ,getCoordinates} from './api/APIUtils.js'
import MapContainer from './components/MapContainer/MapContainer';

function App() {
  const [jobPosts , setJobPosts] = useState([]);
  const [coordinates ,setCoordinates] = useState();

  useEffect(() => {
    getJobPosts(setJobPosts);
  },[])
  
  useEffect(() => {
    getCoordinates(jobPosts,setCoordinates);
  },[jobPosts])

  return (
    <div className='jobPosts__table'>
      {jobPosts.map((item, index) => (
        <JobPost 
          key={index}
          item={item}
        />
      ))}
      <MapContainer jobPosts={jobPosts} coordinates={coordinates}/>
    </div>
  );
}

export default App;
