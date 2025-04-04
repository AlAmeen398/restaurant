import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCards({restData}) {
  return (
    <>
      <Link  style={{textDecoration:'none'}}
      to={`/restaurant_view/${restData.id}`}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"
          className='p-3'
          height={'250px'}
          src={restData.photograph} />
          <Card.Body>
            <Card.Title className='text-center text-warning'>{restData.name}</Card.Title>
            <Card.Text>
              NeighbourHood:<span className='text-warning'>{restData.neighborhood}</span>
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Link>

    </>
  )
}

export default RestCards