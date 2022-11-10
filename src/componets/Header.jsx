import React from 'react'
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,

} from "react-bootstrap";

import { FaCartPlus } from "react-icons/fa";

// importing react router dom

import { Link } from "react-router-dom"

 const Header = () => {
  return (
    <Navbar bg="dark" varient="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to =  "/" > Shoping Cart </Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          ></FormControl>
        </Navbar.Text>

        <Nav>
          <Dropdown  >
            <Dropdown.Toggle variant="succes">
              <FaCartPlus color="white" fontSize="25px" />

              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;