import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div className="">
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              esse in recusandae quod officiis ipsum molestiae nihil excepturi
              quidem, fugit non distinctio qui deleniti molestias cupiditate
              amet animi soluta harum.
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories </h4>
              <ListGroup className="listGroup">
                <ListGroupItem className=" listGroupItem ps-0 border-0">
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <Link to="#">Arm chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <Link to="#">Smart watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup className="listGroup">
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup className="listGroup footer_contact">
                <ListGroupItem className="ps-0 listGroupItem border-0 ">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>Binh Minh, Binh Son, Quang Ngai</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+0978622470</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 listGroupItem border-0">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>nta@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12" className="text-center">
            <p className="footer_copyright">
              @Copyright {year} developed by Nguyen Thanh An. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
