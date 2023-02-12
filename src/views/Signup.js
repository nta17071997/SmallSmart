import React, { useState } from 'react';
import '../styles/login.scss';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            //store user data in firebase storage
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      const user = userCredential.user;
      setLoading(true);
      toast.success('Account created');
      navigate('/login');
    } catch (error) {
      setLoading(false);
      toast.error('Something  went wrong');
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
                <Form className="auth_form" onSubmit={signup}>
                  <FormGroup className="form_group mb-4">
                    <input
                      type="text"
                      placeholder="Enter your userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
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
                  <FormGroup className="form_group mt-4">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button type="submit" className="buy_btn">
                    Create an account
                  </button>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
