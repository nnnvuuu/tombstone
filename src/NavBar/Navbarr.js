import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';


const Navbarr = () => {

  
 //flex-grow-1 justify-content-evenly
  return (
    <div >
         <Navbar sticky='top' bg="light" className='py-4' expand="xl" >
      <Container >
        <Navbar.Toggle className='m-auto'aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav"  >
          <Nav  className='m-auto ' >
        
            <Nav.Link  as={NavLink} to= '/'  style={{fontSize:"30px",marginLeft:'20px'}}>主頁</Nav.Link>
            
          
            <NavDropdown   style={{fontSize:"30px",marginLeft:'20px'}}title={"石碑"  } >

              <NavDropdown.Item  as={NavLink} to= '/FlatMarkers'  style={{fontSize:"20px"}}>平碑</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to= '/斜碑' style={{fontSize:"20px"}}>斜碑 </NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to= '/單人碑' style={{fontSize:"20px"}}>單人碑</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to= '/雙人碑' style={{fontSize:"20px"}}>雙人碑</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to= '/家族碑'  style={{fontSize:"20px"}}>家族碑</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to= '/牌坊'  style={{fontSize:"20px"}}>牌坊</NavDropdown.Item>
     
            </NavDropdown>
        
            <NavDropdown  style={{fontSize:"30px",marginLeft:'20px'}} title="骨灰盅"  >
      
        <div>
          
              <NavDropdown.Item href="#action/3.1" style={{fontSize:"20px"}}>人造吉盅</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:"20px"}}> 天然吉盅</NavDropdown.Item>
            
              </div>
      
        
            </NavDropdown>


            <NavDropdown  style={{fontSize:"30px",marginLeft:'20px'}} title="服務" >
         
            
            <div>
               
              <NavDropdown.Item href="#action/3.1" style={{fontSize:"20px"}}>吉盅刻字</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:"20px"}}>石碑補字</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:"20px"}}>瓷相</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:"20px"}}>影雕</NavDropdown.Item>
            
              </div>
         
            </NavDropdown>


            <NavDropdown  style={{fontSize:"30px",marginLeft:'20px'}} title="公司簡介" >
         
            
            <div>
               
              <NavDropdown.Item href="#action/3.1" style={{fontSize:"20px"}} as={NavLink} to= '/About_us'>关于我们</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={{fontSize:"20px"}} as={NavLink} to= '/ProductAndService'>產品和服務</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:"20px"}}>如何訂購墓碑</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:"20px"}}>墓碑十問和十答</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:"20px"}}>關於隱私</NavDropdown.Item>
            
              </div>
         
            </NavDropdown>


            <Nav.Link href="#home"  style={{fontSize:"30px",marginLeft:'20px'}}>聯繫我們</Nav.Link>



            <Nav.Link href="#home"  style={{fontSize:"30px",marginLeft:'20px'}}>English</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}



export default Navbarr;