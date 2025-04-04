import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useParams() hook is used to get datapassed in url
  const { id } = useParams()
  console.log("url data");
  console.log(id);
  const restaurantData = useSelector(state => state.restaurantStore.allRestaurant.restaurants)
  const selectedRestaurant = restaurantData.find(item => item.id == id)
  console.log(selectedRestaurant);



  return (
    <>

      <Row className='mt-5 mb-5'>
        <Col md={1} lg={1}>
        </Col>
        <Col md={3} lg={3}>

          <img
            height={'100%'}
            width={'100%'}
            src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </Col>
        <Col md={7} lg={7}>
          <hr />
          <h5 className='text-center'><span className='text-warning'>RESTAURANT </span> DETAILS</h5>
          <hr />

          <ListGroup>
            <ListGroup.Item> <h5 className='text-center'>{selectedRestaurant?.name}</h5> </ListGroup.Item>
            <ListGroup.Item>NeighbourHood:{selectedRestaurant?.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Address:{selectedRestaurant?.address}</ListGroup.Item>
            <ListGroup.Item>Cusine Type:{selectedRestaurant?.cuisine_type}</ListGroup.Item>
            <ListGroup.Item>
              <button className='btn btn-warning' onClick={handleShow}>Operating Hours</button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Oprating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    <ListGroup.Item>Sunady:{selectedRestaurant?.operating_hours.Sunday}</ListGroup.Item>
                    <ListGroup.Item>Monday:{selectedRestaurant?.operating_hours.Monday}</ListGroup.Item>
                    <ListGroup.Item>Tuesday:{selectedRestaurant?.operating_hours.Tuesday}</ListGroup.Item>
                    <ListGroup.Item>Wednesday:{selectedRestaurant?.operating_hours.WednesDay}</ListGroup.Item>
                    <ListGroup.Item>Thursday:{selectedRestaurant?.operating_hours.Thursday}</ListGroup.Item>
                    <ListGroup.Item>Friday:{selectedRestaurant?.operating_hours.Friday}</ListGroup.Item>
                    <ListGroup.Item>Saturday:{selectedRestaurant?.operating_hours.Saturday}</ListGroup.Item>
                  </ListGroup>
                </Modal.Body>

              </Modal>
              <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}>User Reviews</button>
            </ListGroup.Item>

          </ListGroup>
        </Col>
        <Col md={1} lg={1}>
        </Col>
      </Row>
      <Row>
        <Col md={4} lg={4}>
        </Col>
        <Col md={7} lg={7}>
          <Collapse in={open}>
            <div>
              <hr />
              <div className='mt-2'>
                <h6>Name & Date: Steve: October 26, 2024</h6>
                <p>Rating: 4</p>
                <p>Review: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odit qui soluta culpa aliquid dicta, temporibus porro recusandae? Est vero molestias facere ducimus, officiis ut obcaecati? Esse voluptatum porro a.</p>
              </div>
            </div>
          </Collapse>

        </Col>
      </Row>
    </>

  )
}

export default RestView