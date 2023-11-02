import React, { useState } from 'react';
import { PopUp } from '../index.js';
import ReactModel from 'react-modal';
import { Button, Card } from 'react-bootstrap';

const JobPost = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const title = item.item.title;
  const country = item.item.country;
  const postedDate = item.item.posted_date;
  const description = item.item.description;
  const link = item.item.link;

  return (
    <>
      <Card style={{width:"300px", margin:"10px"}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{country} {postedDate}</Card.Text>
          <Button onClick={() => setIsOpen(true)}>See More</Button>
        </Card.Body>
      </Card>
      <ReactModel
        isOpen={isOpen}
        contentLabel='example'
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        style={
          { 
          content: {
          top: '80px',
          bottom: '80px',
          left: '80px',
          right: '80px',
          padding: '1rem', 
          }
        }
        }
      >
        <PopUp title={title} country={country} postedDate={postedDate} description={description} link={link}/>
      </ReactModel>
    </>
  )
}

export default JobPost
