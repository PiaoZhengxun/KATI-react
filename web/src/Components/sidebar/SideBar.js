import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai'
import{BiSearch} from 'react-icons/bi'
import {MdOutlineCategory} from 'react-icons/md'
import {FiAward} from "react-icons/fi"
const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>KATI</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
      <NavItem>
          <NavLink className="nav_link" tag={Link} to={"/"} style={{display:'flex',alignItems:'center'}}>
          <AiOutlineHome className="nav_menu" size="40"/> 
          <div className="nav_menu" style={{marginLeft:'5%'}}>HOME</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav_link" tag={Link} to={"/ranking"} style={{display:'flex',alignItems:'center'}}>
          <BiSearch className="nav_menu" size="40"/>
          <div className="nav_menu" style={{marginLeft:'5%'}}>SEARCH</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav_link" tag={Link} to={"/category"} style={{display:'flex',alignItems:'center'}}>
          <MdOutlineCategory className="nav_menu" size="40"/> 
          <div className="nav_menu" style={{marginLeft:'5%'}}>CATEGORY</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav_link" tag={Link} to={"/ranking"} style={{display:'flex',alignItems:'center'}}>
          <FiAward className="nav_menu" size="40"/>
          <div className="nav_menu" style={{marginLeft:'5%'}}>RANKING</div>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);


export default SideBar;
