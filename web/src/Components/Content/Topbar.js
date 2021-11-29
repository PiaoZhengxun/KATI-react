import React, { useState } from "react";
import {
  Navbar,
  Input,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
const Topbar = ({ toggleSidebar,sidebarIsOpen}) => {
  console.log(sidebarIsOpen)
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () =>  setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="lg"
      style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}
    >
       <div onClick={toggleSidebar} style={{marginRight:'4rem'}}>
       {sidebarIsOpen ? <AiOutlineArrowLeft size="30" /> : <AiOutlineArrowRight size="30" />}
      </div>
      
      <div>
      <Input placeholder="search.."/>
      </div>


      
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>

        </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/login"}>
              로그인
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/join"}>
              회원가입
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
