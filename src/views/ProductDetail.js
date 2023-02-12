import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import Common from '../components/Common/Common';
import products from '../assets/data/products';
import '../styles/productDetail.scss';
import { motion } from 'framer-motion';
import ProductsList from '../components/Product/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);
  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    toast.success('Review Submitted');
    reviewUser.current.value = '';
    reviewMsg.current.value = '';
  };
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success('Product added successfully');
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Helmet title="Product Detail">
      <Common title="Product Detail"></Common>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-4">
                  <div className="">
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p className="mb-0">({avgRating} ratings)</p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product_price">$ {price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  onClick={addToCart}
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn"
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrraper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === 'desc' ? 'active_tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active_tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab_content mt-3">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review">
                  <div className="review_wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index + 1}>
                          <h6>An Dev</h6>
                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="review_form">
                    <h4>Leave your experience</h4>
                    <form action="" onSubmit={handleSubmit}>
                      <div className="form_group">
                        <input
                          type="text"
                          ref={reviewUser}
                          placeholder="Enter name"
                          required
                        />
                      </div>
                      <div className="form_group d-flex align-items-center gap-5">
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(1)}
                        >
                          1 <i className="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(2)}
                        >
                          2 <i className="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(3)}
                        >
                          3 <i className="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(4)}
                        >
                          4 <i className="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(5)}
                        >
                          5 <i className="ri-star-s-fill"></i>
                        </motion.span>
                      </div>
                      <div className="form_group">
                        <textarea
                          ref={reviewMsg}
                          rows={4}
                          type="text"
                          placeholder="Review Message"
                          required
                        />
                      </div>
                      <button type="submit" className="buy_btn">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related_title">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetail;
