import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBarLink
} from '../NavBar/StyleNavBar';
import { animateScroll as scroll } from 'react-scroll';


function NavBar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Nav scrollNav={scrollNav}>
            <NavBarContainer toggle={toggle}>
                <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Discover
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Signup
                        </NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBarLink to="/singin">Sing In</NavBarLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
    )
}

export default NavBar
