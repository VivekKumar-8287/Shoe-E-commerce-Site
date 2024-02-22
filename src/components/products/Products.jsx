import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Products = () => {
  return (
    <Container>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
      <Link to="/product/:id">
        <Product />
      </Link>
    </Container>
  );
};

export default Products;
