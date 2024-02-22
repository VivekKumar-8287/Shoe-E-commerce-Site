import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

const Product = () => {
  return (
    <Container>
      <img src="" alt="" />
      <status>Comming soon</status>
      <title>Nike Air</title>
      <category>Mens shoes</category>
      <color>1 Colour</color>
      <price>MRP 130000</price>
    </Container>
  );
};

export default Product;
