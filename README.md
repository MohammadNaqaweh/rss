# Job Search Website

This is a simple **React App** that displays Job Posts in 2 view **(List and Map)**.

It uses a simple backend service that fetches the jobs from an RSS Feed and passes it to the frontend service where it is minupluated and displaied in the 2 views accordingly.

---

### Backend Service provides 2 APIs:

1. `getJobPosts`
    
    Returns an **Array of Objects** after parsing the RSS Feed. The returned Objects look like:
```
{
  "title": "Title of the Job Post",
  "country": "Country of the Job Post",
  "posted_date": "The date the job was posted"
  "description": "An HTML String",
  "link": "link to the job post"
}
```

2. `countryCoordinates`

    Takes query parameter of `country name` and returns and object that look like:

```
{
  "lat": "The latitude",
  "lng": "The longitude",
  "country": "The country name"
}
```

# Running the Website

1. checkout rss-server from: <!--- TODO: add github URL -->
2. go to rss-server
3. run `npm start` inside the rss-server package
4. ensure that the server is running correctly by seeing `App is active` in the rss-server terminal.
5. run `npm start` inside react app terminal.
6. go to `http://localhost:3000/`