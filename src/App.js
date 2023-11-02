import React, { useEffect, useState } from 'react';
import './App.css';
import { JobPosts, Navigation } from './components';
import {getJobPosts, getCoordinates} from './api/APIUtils.js'
import MapContainer from './components/MapContainer/MapContainer';

function App() {
  const [jobPosts , setJobPosts] = useState([]);
  const [coordinates ,setCoordinates] = useState();
  const [view, setView] = useState('List');

  useEffect(() => {
    getJobPosts(setJobPosts);
  },[])
  
  useEffect(() => {
    getCoordinates(jobPosts,setCoordinates);
  },[jobPosts])

  return (
    <div>
      <Navigation setView={setView}/>
      {view === "List" && <JobPosts jobPosts={jobPosts}/>}
      {view === "Map" && <MapContainer jobPosts={jobPosts} coordinates={coordinates}/>}
    </div>
  );
}

export default App;
