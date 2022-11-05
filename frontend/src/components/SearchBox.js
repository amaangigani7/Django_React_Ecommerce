import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../actions/productActions";

function SearchBox() {
  //   const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  //   const productList = useSelector((state) => state.productList);
  //   const { error, loading, products, page, pages } = productList;

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    // history.push(`/?keyword=${keyword}`);
    // dispatch(listProducts(keyword));
    if (keyword) {
      history.push(`?keyword=${keyword}&page=1`); //
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline="true">
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Button type="submit" variant="outline-success">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
