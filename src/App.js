import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { JobPost } from './components';
import {getCountries} from './api/APIUtils.js'
import MapContainer from './components/MapContainer/MapContainer';

function App() {
  const [jobPosts , setJobPosts] = useState([]);
  const [coordinates ,setCoordinates] = useState([]);

  const getJobPosts = async () => {
    try{
      const res = await axios.get("http://localhost:4000/jobPosts");
      setJobPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const getCoordinates = async (jobPosts) => {
    const c = [];
    const countries = getCountries(jobPosts);
    countries.forEach(async (country) => {
      try {
        const res = await axios.get(`http://localhost:4000/countryCoordinates`, {
          params: {country: country}
        })
        c.push(res.data);
      } catch (error) {
        console.log(error);
      }
    })
    setCoordinates(c);
  }

  useEffect(() => {
    getJobPosts();
  },[])
  
  useEffect(() => {
    getCoordinates(jobPosts);
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
