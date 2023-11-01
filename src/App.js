import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { JobPost } from './components';
import MapContainer from './components/MapContainer/MapContainer';

function App() {
  const [jobPosts , setJobPosts] = useState([]);
  const [countries , setCountries] =useState({});

  const getJobPosts = async () => {
    try{
      const res = await axios.get("http://localhost:4000/jobPosts");
      setJobPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const getCountries = (jobPosts) => {
    let countries = {};
    jobPosts.forEach((item) =>{
      const country = item.item.country;
      if(!countries.hasOwnProperty(country)){
        countries[country] = [];
      }
      countries[country].push(item);
    })
    setCountries(countries);
  }

  useEffect(() => {
    getJobPosts();
  },[])

  useEffect(() => {
    getCountries(jobPosts);
  },[jobPosts])
  
  return (
    <div className='jobPosts__table'>
      {jobPosts.map((item, index) => (
        <JobPost 
          key={index}
          item={item}
        />
      ))}
      <MapContainer items={countries}/>
    </div>
  );
}

export default App;
