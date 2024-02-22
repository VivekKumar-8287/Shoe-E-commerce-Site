import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  gap: 20px;
  margin: 8px;
  // height: 60vh;
  // width: 60vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div``;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 400;
  text-decoration: none; /* Correct */
  color: black;
  margin-top: 40px;
`;

const FeaturedItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  );
};

export default FeaturedItem;
