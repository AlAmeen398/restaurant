import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCards from '../components/RestCards'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'

function Home() {
  // to call any function inside slice, we have to useDispatch() hook
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRestaurant())
  }, [])
  // useSelector() hook is used to access values from store
  const allRestaurant = useSelector((state) => state.restaurantStore.allRestaurant.restaurants);
  console.log("Restaurant Data");
  console.log(allRestaurant);


  return (
    <>
      <Row>
        {
          allRestaurant?.length > 0 ?
            allRestaurant.map(item => (
              <Col sm={6} md={4} lg={3} className='px-5 py-3'>
                <RestCards restData ={item}/>
              </Col>
            )) :
            <p>No item Found</p>
        }

      </Row>
    </>
  )
}

export default Home