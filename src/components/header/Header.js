import React, { useEffect, useState } from "react";
// import { Navbar } from "react-bootstrap";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavbarText,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import CreatePlayer from "../createPlayer.js/CreatePlayer";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleCreatePlayerModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Player</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/player">ViewPlayers</NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/player">View Players</DropdownItem>
                  <DropdownItem onClick={toggleCreatePlayerModal}>
                    Create Player
                  </DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>All Rights Reserved</NavbarText>
          </Collapse>
          <Modal isOpen={modal} toggle={toggleCreatePlayerModal}>
            <ModalHeader>Create Player Form</ModalHeader>
            <ModalBody>
              <CreatePlayer />
            </ModalBody>
          </Modal>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
