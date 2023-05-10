import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaHome,
  FaBook,
  FaUsers,
  FaFolderOpen,
  FaVideo,
  FaImages,
  FaBlog,
  FaSignOutAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/home',
      name: 'Home',
      icon: <FaHome />,
    },
    {
      path: '/course',
      name: 'Course',
      icon: <FaBook />,
    },
    {
      path: '/students',
      name: 'Student',
      icon: <FaUsers />,
    },
    {
      path: '/team',
      name: 'Team',
      icon: <FaUsers />,
    },
    {
      path: '/projects',
      name: 'Projects',
      icon: <FaFolderOpen />,
    },
    {
      path: '/videos',
      name: 'Videos',
      icon: <FaVideo />,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      icon: <FaImages />,
    },
    {
      path: '/blog',
      name: 'Blog',
      icon: <FaBlog />,
    },
    {
      path: '/logout',
      name: 'Logout',
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? '250px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? '50px' : '0px' }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;