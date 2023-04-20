import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { IconContext } from 'react-icons/lib';


const Nav1 = styled.div`
  background: black;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: black;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav1>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>

          <img style={{ margin: "60px" }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGa0d8GhUWKP_sK48o2XxFYGhwQXhbDYB-gA&usqp=CAU'
            height='65'
            width='100'
            alt=''
            loading='lazy'

          />

          <span style={{ color: "white", fontSize: "35px", marginLeft: "750px" }}> Welcome:  Sandeep</span>

          <NavDropdown id="collasible-nav-dropdown" style={{ color: "white", fontSize: "27px", marginLeft: "10px" }}>
            <NavDropdown.Item href="/profile" >View Profile</NavDropdown.Item>
            <NavDropdown.Item href="/login">
              Logout
            </NavDropdown.Item>


          </NavDropdown>




        </Nav1>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>

              <AiIcons.AiOutlineClose onClick={showSidebar} />

              <img style={{ margin: "50px" }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGa0d8GhUWKP_sK48o2XxFYGhwQXhbDYB-gA&usqp=CAU'
                height='65'
                width='100'
                alt=''
                loading='lazy'
                 />
            </NavIcon>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;