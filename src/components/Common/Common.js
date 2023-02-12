import React from 'react';
import { Container } from 'react-bootstrap';
import './Common.scss'

const Common = ({ title }) => {
  return (
    <section className="common_section">
      <Container>
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default Common;
