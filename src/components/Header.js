import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container';
import Menu from '@mui/material/Menu';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from "./cart.gif"
import shoes from "./shoes.jpg";
import { useDispatch, useSelector } from 'react-redux';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Table } from '@mui/material';
import "./style.css"
import { DLT } from '../redux/actions/action';


const Header = () => {

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const dlt = (id)=>{
    dispatch(DLT(id))
}


  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/"><img
            src={shoes}
            width="38"
            height="42"
            className="d-inline-block align-top"
            alt="logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', fontSize: 18, fontWeight: 600 }}
              navbarScroll
            >
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/men" >Men</Nav.Link>
              <Nav.Link href="/women" >Women</Nav.Link>
            </Nav>
            <Badge badgeContent={getdata.length} color="primary"
              id="basic-button"
              className='mx-5'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <i class="fa-solid fa-cart-shopping dark" style={{ fontSize: 25, cursor: 'pointer' }}></i>
            </Badge>

          </Navbar.Collapse>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getdata.length ?
              <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Shoes Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td className='p-2'>
                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                  <img src={e.imgdata} style={{ width: "6rem", height: "6rem" }} alt="" />
                                </NavLink>
                              </td>
                              <td className='p-2'>
                                <p >Brand: <span style={{color:"red",fontWeight:"600" }}>{e.brand}</span></p>
                                <p style={{fontWeight:"bold"}}>{e.rname}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={()=>dlt(e.id)}>
                                  <i className='fas fa-trash smalltrash'></i>
                                </p>
                              </td>
                              
                              <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }}  onClick={()=>dlt(e.id)}>
                                <i className='fas fa-trash largetrash'></i>
                              </td>
                            </tr>
                            <hr/>
                          </>
                        )
                      })
                    }
                    <p className='text-center'>Total :₹10</p>
                  </tbody>
                </Table>
              </div> :
              <div className='card_details'>
                <i className='fas fa-close smallclose' onClick={handleClose}></i>
                <p style={{ fontSize: 22 }}>Your cart is Empty</p>
                <img src={cart} alt='cart.gif' className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
              </div>
          }
        </Menu>
      </Navbar>

    </>

  )
}

export default Header