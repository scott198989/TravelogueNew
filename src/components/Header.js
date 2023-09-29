import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import Travelogo from '../assets/Travelogo.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';


const Header = ({ currentUser, logout }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        logout();
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  

    return (
        <>
            <Navbar 
                className="navbar__header 
                    navbar-expand-md" 
                dark="true"
            >
                <NavbarBrand href="/">
                    <img
                        className='mb-2 logo__header'
                        alt="RSTech logo, a mountain with a door and clouds around the peak"
                        src={Travelogo}
                        style={{
                            height: "10dvh",
                            width: "auto",
                        }}
                    />
                    RSTech
                </NavbarBrand>
                <div className="links__header">
                    <NavbarToggler onClick={toggle} data-testid='navtoggler' dark="true"/>
                    <Collapse isOpen={isOpen} data-testid="navcollapse" navbar>
                    <Nav 
                        className="
                            nav__header 
                            me-auto" 
                        navbar 
                    >
                        {currentUser && (
                            <>
                                <NavItem>
                                    <NavLink href="/addtrip">
                                        Add Trip
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/mytrips">
                                        My Trips
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/PackingList">
                                        My List
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/demotrips">
                                        Adventures
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mr-auto">
                                    <NavLink onClick={handleClick}>
                                        Log Out
                                    </NavLink>
                                </NavItem>
                            </>
                        )}
                        {!currentUser && (
                            <>
                                <NavItem>
                                    <NavLink href="/demotrips">
                                        Adventures
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/signup">
                                        Sign Up
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login">
                                        Log In
                                    </NavLink>
                                </NavItem>
                            </>
                        )}

                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </>
    );
};

export default Header;

