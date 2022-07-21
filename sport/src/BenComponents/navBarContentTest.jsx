
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import '../scss/all.css';
import { NavLink } from 'react-router-dom';


import logo from "../imgs/logo/logo.png";

function NavBarContent1() {
  const [mylocalStorage, setMylocalStorage] = useState('');
  useEffect(() => {
    setMylocalStorage(window.localStorage);
  }, [])

  let logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <div >

      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top">
        <Container>
          {/* 更換LOGO圖片 */}
          <Navbar.Brand><NavLink to="/" exact><img src={logo} alt="test1" width={150} height={50} /></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link><NavLink className="nav-link col-lg" to="/lesson" exact >課程與場地</NavLink></Nav.Link>
              <Nav.Link><NavLink className="nav-link col-lg " to="/BeCoach" exact >成為教練</NavLink></Nav.Link>
              <Nav.Link><NavLink className="nav-link col-lg " to="/RentPlace" exact >租場地</NavLink></Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link> <NavLink className={window.localStorage.length == 0 ? 'nav-link col-lg' : 'nav-link col-lg d-none'} to="/login" exact >登入/註冊</NavLink></Nav.Link>
              <Nav.Link><NavLink className={window.localStorage.length == 0 ? 'nav-link col-lg d-none' : 'nav-link col-lg'} to={`/member/${window.localStorage.id}`} exact >會員頁</NavLink></Nav.Link>
              <Nav.Link><NavLink onClick={logOut} className={window.localStorage.length == 0 ? 'nav-link col-lg d-none' : 'nav-link col-lg'} to='' exact >登出</NavLink></Nav.Link>
              {/* <Nav.Link> <NavLink className="nav-link col-lg" to="/login" exact >登入/註冊</NavLink></Nav.Link> */}
              {/* <Nav.Link> <NavLink className="nav-link col-lg" to="/shoppingCartPage" exact >購物車頁面二</NavLink></Nav.Link> */}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default NavBarContent1;