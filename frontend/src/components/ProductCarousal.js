import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Carousel } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listTopProducts } from "../actions/productActions";
import { Link, useHistory } from "react-router-dom";

const ProductCarousal = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, loading, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} />
            <Carousel.Caption className="carousel.caption">
              <h4>
                {product.name} (${product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousal;
