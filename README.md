# Job Search Website

This is a simple **React App** that displays Job Posts in 2 view **(List and Map)**.

It uses a simple backend service [rss-server](https://github.com/MohammadNaqaweh/rss-server.git) that fetches the jobs from an RSS Feed and passes it to the frontend service where it is minupluated and displayed in the 2 views accordingly.

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

2. `getCoordinates`

    Takes query parameter of `country name` and returns and object that look like:

```
{
  "lat": "The latitude",
  "lng": "The longitude",
  "country": "The country name"
}
```

### The website use google maps Api via a npm package called [google-maps-react](https://www.npmjs.com/package/google-maps-react)

### The website use react-bootstrap components for rendering coustome components

# Running the Website

### To run the website first we need to run the backend services to do that

1. `mkdir rssParser`
2. clone the Repo: `git clone https://github.com/MohammadNaqaweh/rss-server.git`
3. `cd rss-server`
4. `yarn install` to install all dependancies in the project
5. `npm start` to start the localhost of the backend service 
6. ensure that the server is running correctly by seeing `App is active` in the rss-server terminal.

After this we can strat the React website:

1. in anpther terminal go to `rssParser` directory  
2. clone the react app Repo: `git clone https://github.com/MohammadNaqaweh/rss.git`
3. `cd rss`
4. `yarn install` to install all dependancies in the project
5. `npm start` to start the webpage
6. go to `http://localhost:3000/`