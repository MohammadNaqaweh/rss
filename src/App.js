import React, { useEffect, useState } from 'react';
import './App.css';
import { JobPosts } from './components';
import {getJobPosts, getCoordinates} from './api/APIUtils.js'
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
    <div>
      <JobPosts jobPosts={jobPosts}/>
      <MapContainer jobPosts={jobPosts} coordinates={coordinates}/>
    </div>
  );
}

export default App;
