import React, { useState,useEffect } from "react";
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
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const [user,setUser] = useState(null);

  const toggleTopbar = () =>  setTopbarOpen(!topbarIsOpen);
  const logout =() => {
    alert("로그아웃")
    localStorage.removeItem("authorization");
    window.location.href = '/'
  }
  const getUser =()=>{
    setUser(localStorage.getItem("authorization"));
    console.log(user)
  }
  
  useEffect(() => {
    console.log("랜더링",localStorage.getItem("authorization"))
    getUser()
  }, [user])

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
         {user == null ?
        <div style={{display:'flex'}}> 
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
            </div>
            : 
            <div style={{display:'flex'}}>
            <NavItem>
               <NavLink tag={Link} to={"/mypage"}>
                 마이페이지
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink tag={Link} to={"/"} onClick={logout}>
                 로그아웃
               </NavLink>
               </NavItem>
               </div>
          }
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
