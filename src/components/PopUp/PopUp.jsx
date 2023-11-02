import React from 'react';
import parse from 'html-react-parser';
import { Button, Card } from 'react-bootstrap';
import { redirectToPost } from '../../utils/utils.js'
import './popup.css';

const PopUp = ({ title,country,postedDate,description, link }) => {
  return ( 
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {country} {postedDate}
          <div className='jobPosts__table-post_description'>{parse(description)}</div>
        </Card.Text>
        <Button onClick={() => redirectToPost(link)}>Apply</Button>
      </Card.Body>
    </Card>
  )
}

export default PopUp
