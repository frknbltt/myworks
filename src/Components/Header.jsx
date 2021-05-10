import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    let oldValue = this.state.isOpen;
    oldValue = !oldValue;
    this.setState({
      isOpen: oldValue,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Components
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink>
                      <Link to="/todolist/">To Do List</Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link to="/group19/">Group19</Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link to="/group15/">Group15</Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link to="/group20/">Group20</Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link to="/group21/">Group21</Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link to="/group22/">Group22</Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link to="/group23/">Group23</Link>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
