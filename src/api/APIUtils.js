import axios from 'axios';

const getCountries = (jobPosts) => {
  let countries = [];
  jobPosts.forEach((item) =>{
    const country = item.item.country;
    if(!countries.includes(country)){
      countries.push(country)
    }
  })
  return countries;
}

export const getJobPosts = async (setJobPosts) => {
  try{
    const res = await axios.get("http://localhost:4000/jobPosts");
    setJobPosts(res.data);
  } catch (e) {
    console.log(e);
  }
}

export const getCoordinates = async (jobPosts ,setCoordinates) => {
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