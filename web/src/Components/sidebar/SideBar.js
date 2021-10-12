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
          <NavLink className="nav_link"tag={Link} to={"/"}>
          <AiOutlineHome size="30"/> HOME
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/search"}>
            <BiSearch size="30"/> SEARCH
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/category"}>
          <MdOutlineCategory size="30"/> CATEGORY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/ranking"}>
          <FiAward size="30"/>RANKING
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);


export default SideBar;
