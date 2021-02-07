import React from 'react';
import {
    SidebarContainer,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SlidebarLink,
    SidebarBtnWrap,
    Icon,
    SideBarRoute

} from './StyleSlidebar';

function Sidebar({ isOpen, toggle }) {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SlidebarLink to="about"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>About
                    </SlidebarLink>
                    <SlidebarLink to="discover"
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>Discover
                    </SlidebarLink>
                    <SlidebarLink to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggle}>Services
                    </SlidebarLink>
                    <SlidebarLink to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggle}>Sign Up
                    </SlidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SideBarRoute to="/singin">Sign In</SideBarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
