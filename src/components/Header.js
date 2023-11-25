import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container';
import Menu from '@mui/material/Menu';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from "./cart.gif"
import shoes from "./shoes.jpg";

const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          style={{ maxHeight: '100px',fontSize:18, fontWeight:600}}
          navbarScroll
        >
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/men" >Men</Nav.Link>
          <Nav.Link href="/women" >Women</Nav.Link>
     </Nav>
       <Badge badgeContent={5} color="primary"
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
        <div className='card_details'>
                <i className='fas fa-close smallclose' onClick={handleClose}></i>
                <p style={{ fontSize: 22 }}>Your cart is Empty</p>
                <img src={cart} alt='cart.gif' className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
              </div>
      </Menu>
  </Navbar>

  </>
  
  )
}

export default Header