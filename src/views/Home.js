import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from '../assets/images/hero-img.png';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import ProductsList from '../components/Product/ProductsList';
import products from '../assets/data/products';
import countImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/Clock/Clock';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const fillteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
    );

    const bestSalesProducts = products.filter(
      (item) => item.category === 'sofa'
    );
    const fillteredMobilesProducts = products.filter(
      (item) => item.category === 'mobile'
    );
    const fillteredWireLessProducts = products.filter(
      (item) => item.category === 'wireless'
    );
    const fillteredPopularProducts = products.filter(
      (item) => item.category === 'watch'
    );
    setTrendingProducts(fillteredTrendingProducts);
    setBestSalesProducts(bestSalesProducts);
    setMobileProducts(fillteredMobilesProducts);
    setWirelessProducts(fillteredWireLessProducts);
    setPopularProducts(fillteredPopularProducts);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className="hero_section">
        <Container>
          <Row >
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nihil quod commodi. Sint incidunt architecto praesentium et
                  facilis? Expedita esse est delectus eligendi blanditiis animi
                  pariatur veritatis repellendus quae harum.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn"
                >
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchir</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ sacle: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={countImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrials">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New Arrials</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
