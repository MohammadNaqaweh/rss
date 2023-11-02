import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { redirectToPost } from '../../utils/utils.js'

const MapPopUp = ( {jobPosts} ) => {
  

  return (
    <div>
      {jobPosts.map((job, index) => (
        <Card key={index} style={{width: '300px'}}>
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Text>{job.posted_date}</Card.Text>
            <Button onClick ={() => {redirectToPost(job.link)}} variant='primary'>Apply</Button>
          </Card.Body>
        </Card>
      ))}
    </div>

  )
}

export default MapPopUp
