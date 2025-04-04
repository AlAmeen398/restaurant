import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestaurant } from '../redux/restaurantSlice';

function Header() {
const dispatch = useDispatch();

    return (
        <>
            <Navbar className="bg-body-tertiary bg-dark" >
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none', width:'100%' }}>
                        <div className='d-flex justify-content-between align-items-center '>
                            <Navbar.Brand >
                                <img
                                    alt=""
                                    src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-restaurant-icon-png-image_6473241.png"
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top me-3"
                                />{' '}
                                <span style={{ color: 'white' }}>FOOD CIRCLE</span>
                            </Navbar.Brand>
                            <input type="text"
                            onChange={(e)=> dispatch(searchRestaurant(e.target.value))} className='form-control w-25' placeholder='Search By Neighborhood' />
                        </div>

                    </Link>

                </Container>
            </Navbar>
        </>
    )
}

export default Header