import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousal from "../components/ProductCarousal";
import { listProducts } from "../actions/productActions";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

function HomeScreen() {
  const history = useHistory();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  let keyword = history.location.search;
  // console.log(keyword);

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword, history]);

  return (
    <div>
      {!keyword && <ProductCarousal />}

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={page} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default withRouter(HomeScreen);
