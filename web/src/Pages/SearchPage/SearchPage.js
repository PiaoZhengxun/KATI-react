import React from 'react'
import { Navbar,Nav,DropdownMenu,NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink ,UncontrolledDropdown,DropdownToggle,DropdownItem,NavbarText} from 'reactstrap';
import './SearchStyle.scss'
import {BiSearch} from 'react-icons/bi';

function SearchPage() {
    return (
        <div className="container">
        <Navbar
          color="white"
          expand="md"
          light
        >
          <NavbarBrand style={{fontWeight:'700', color:'black'}}>
            검색결과 (0)
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink >
                  가나다순
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
                  제조사별
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
                  식품별
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
              </UncontrolledDropdown>
            </Nav>
            <div className="search_group">
                <input className="search_input"/>
                <button className="search_button"><BiSearch size="30"/></button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default SearchPage
