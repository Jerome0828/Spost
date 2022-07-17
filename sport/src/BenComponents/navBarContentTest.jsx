import React  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import '../scss/all.css';
import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';


import logo from "../imgs/logo/logo.png";

function NavBarContent1() {
    return (
      <div >

        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top"  
          
        >
          <Container>
             {/* 更換LOGO圖片 */}
            <Navbar.Brand><NavLink  to="/" exact><img src={logo} alt="test1" width={150} height={50}/></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

              <Nav.Link><NavLink className="nav-link col-lg" to="/lesson" exact >課程與場地</NavLink></Nav.Link>
              <Nav.Link><NavLink className="nav-link col-lg " to="/BeCoach" exact >成為教練</NavLink></Nav.Link>
              <Nav.Link><NavLink className="nav-link col-lg " to="/RentPlace" exact >租場地</NavLink></Nav.Link>

              {/* 0709 DONG新增 */}
              <Nav.Link><NavLink className="nav-link col-lg " to="/member" exact >會員頁</NavLink></Nav.Link>

              </Nav>
              <Nav>
              <Nav.Link> <NavLink className="nav-link col-lg" to="/login" exact >登入/註冊</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
      </div>
    );
  }
  
  export default NavBarContent1;