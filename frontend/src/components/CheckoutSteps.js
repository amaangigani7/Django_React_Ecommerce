import React from "react";
import { Nav, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Container>
            <Nav.Link>Login</Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Login</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Container>
            <Nav.Link>Shipping</Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Ship</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Container>
            <Nav.Link>Pay</Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Pay</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <Container>
            <Nav.Link>Order</Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
