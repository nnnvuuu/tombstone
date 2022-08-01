import './Navbar.css';
import React, { useState } from 'react';
import { menuItems } from './MenuItems/MenuItems';
// import MenuItems from './MenuItems/MenuItem';
import Dropdown from 'react-bootstrap/Dropdown';
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu




  
const Navbar = () => {
    const [isShow, setIsShown] = useState(false);


    // const onMouseEnter = (e) =>{
    //     e.preventDefault();
    //      setIsShown(true);
    //      console.log("true");
    // }


    // const onMouseLeave = (e) =>{
    //     e.preventDefault();
    //      setIsShown(false);
    //      console.log("false");
    // }


const CustomToggle = React.forwardRef(({ children, onClick,onMouseEnter,onMouseLeave }, ref) => (
    <a
      href=""
      ref={ref}
    //   onClick={(e) => {
    //     e.preventDefault();
    //     onClick(e);  console.log("true");
    //   }}
    onMouseEnter={(e) => {
        e.preventDefault();
        // onClick(e);
        setIsShown(true);
        console.log("true");
      }}

     onMouseLeave={(e) => {
        e.preventDefault();
        setIsShown(false);
        console.log("false");
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
    return(
         <nav>
             <ul className="menus">
                 {menuItems.map((menu, index) => {
                      return (
                        <Dropdown key={index}>
                           
                            <Dropdown.Toggle  as={CustomToggle}>
                                     {menu.title}
                            </Dropdown.Toggle>
                            {/* <div  key={index}>
                            <a href="/#" className="menu-items">{menu.title}</a>
                            </div> */}
                           
                            <Dropdown.Menu  >
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                                
                              
                        </Dropdown>
                     
                      );
                })}
               
             </ul>
         </nav>
    
    )
}


// const Navbar = () => {
//     return(
//         //  <div className="container">
//         //       <div>主页</div>
//         //       <div>石碑</div>
//         //       <div>骨灰盅</div>
//         //       <div>服務</div>
//         //       <div>公司簡介</div>
//         //       <div>聯繫我們</div>
//         //       <div>English</div>
//         // </div>
//          <nav>
//              <ul className="menus">
//                  {menuItems.map((menu, index) => {
//                       return (
                         
//                             <div  key={index}>
//                             <a href="/#" className="menu-items">{menu.title}</a>
//                             </div>
                  
//                       )
//                 })}
               
//              </ul>
//          </nav>
    
//     )
// }

export default Navbar;