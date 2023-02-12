import React, { useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Header.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hook/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav_links = [
  { path: '/home', display: 'Home' },
  { path: '/shop', display: 'Shop' },
  { path: '/cart', display: 'Cart' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
        ? headerRef.current.classList.add('sticky_header')
        : headerRef.current.classList.remove('sticky_header');
    });
  };
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle('show_profileActions');

  const navigateToCart = () => {
    navigate('/cart');
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out');
        navigate('/home');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    stickyHeader();

    return window.removeEventListener('scroll', stickyHeader);
  });
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuToggle = () => menuRef.current.classList.toggle('active_menu');
  return (
    <div className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrraper">
            <div className="logo">
              <img src={logo} alt="" />
              <div className="">
                <h1>Multimart</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index + 1}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav_active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icon">
                <i className="ri-heart-line"></i>
                <span className="badge">12</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i className="ri-shopping-cart-2-line"></i>
                <span className="badge"> {totalQuantity}</span>
              </span>
              <div className="userIcon profile">
                <motion.img
                  onClick={toggleProfileActions}
                  whileTap={{ scale: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                />
                <div className="profile_actions" ref={profileActionRef}>
                  {currentUser ? (
                    <span onClick={logOut}>Logout</span>
                  ) : (
                    <div className="profile_acts">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
