import React, { useState } from 'react';
import '../styles/login.scss';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setLoading(false);
      toast.success('Successfully logged in');
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <Helmet title="login">
      <section>
        <Container className="mt-5">
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              <Col lg="4" className="m-auto text-center login_form">
                <h3 className="fw-bold fs-4 ">Login</h3>
                <Form className="auth_form" onSubmit={signIn}>
                  <FormGroup className="form_group mb-4">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group d-flex pass_form">
                    <input
                      type={isShowPassword ? 'text' : 'password'}
                      required
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => {
                        handleShowHidePassword();
                      }}
                    >
                      {isShowPassword ? (
                        <i className="ri-eye-fill eye"></i>
                      ) : (
                        <i className="ri-eye-off-fill eye"></i>
                      )}
                    </span>
                  </FormGroup>
                  <button type="submit" className="buy_btn">
                    Login
                  </button>
                  <p>
                    Don't have an account?{' '}
                    <Link to="/signup">Create an account</Link>
                  </p>
                </Form>
                <div className="social_form">
                  <span className="text-other-login">Or Login with: </span>
                  <i className="ri-google-line google"></i>
                  <i className="ri-facebook-line facebook"></i>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
