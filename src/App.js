import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { JobPost } from './components';

function App() {
  const [jobPosts , setJobPosts] = useState([]);
  
  console.log(jobPosts);

  const getJobPosts = async () => {
    try{
      const res = await axios.get("http://localhost:4000/");
      setJobPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getJobPosts();
  },[])
  
  return (
    <div className='jobPosts__table'>
      {jobPosts.map((item, index) => (
        <JobPost 
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default App;
