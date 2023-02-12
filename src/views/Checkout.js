import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import Common from '../components/Common/Common';
import '../styles/checkout.scss';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <Common title="Checkout"></Common>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4">Builling information</h6>
              <Form className="billing_form">
                <FormGroup className="form_gourp">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form_gourp">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form_gourp">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form_gourp">
                  <input type="text" placeholder="Address" />
                </FormGroup>
                <FormGroup className="form_gourp">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form_gourp">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup className="form_gourp">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty: <span>{totalQty}</span>{' '}
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>{' '}
                </h6>
                <h6>
                  Shipping: <br /> Free shipping<span>$0</span>{' '}
                </h6>

                <h4>
                  Total Cost: <span>$120</span>{' '}
                </h4>
                <button className="buy_btn auth_btn">Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
