import React from "react";
import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import { featured } from "../../data";
import { Link } from "react-router-dom";

const FeaturedContainer = styled.div`
  padding: 0rem 4rem;
`;

const Container = styled.div`
  display: flex;
  width: 90vw;
  margin: auto;
  padding-left: 2rem;
  text-decoration: none;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Featured = () => {
  return (
    <FeaturedContainer>
      <Title>Featured</Title>
      <Container>
        {featured.map((item) => (
          // <Link to="/products" style={{display:'flex'}}>
          <FeaturedItem key={item.id} item={item} />
          // </Link>
        ))}
      </Container>
    </FeaturedContainer>
  );
};

export default Featured;
