export const getCountries = (jobPosts) => {
  let countries = [];
  jobPosts.forEach((item) =>{
    const country = item.item.country;
    if(!countries.includes(country)){
      countries.push(country)
    }
  })
  return countries;
}