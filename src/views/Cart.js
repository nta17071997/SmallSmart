import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import Common from '../components/Common/Common';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/cart.scss';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/Slices/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img alt="" src={item.image} />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <Common title="Shopping Cart"></Common>
      <Container className='cart'>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2 className="text-center fs-4">No item added to the cart</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr key={index + 1} item={item} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3">
            <div className="total-amount">
              <h6 className="d-flex align-items-center justify-content-between">
                Subtotal
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </h6>
            </div>
            <p>Texes and shipping will caculate in checkout</p>
            <div className="">
              <button className="buy_btn w-100 ">
                <Link to="/shop">Continute Shopping</Link>
              </button>
              <button className="buy_btn w-100 mt-2">
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Cart;
