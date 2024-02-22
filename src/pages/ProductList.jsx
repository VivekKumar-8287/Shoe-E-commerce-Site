import React from "react";
import Products from "../components/products/Products";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  font-size:20px;
`;

const Title = styled.div``;

const FilterContainer = styled.div`
  display: flex;
`;

const FilterBox = styled.div`
  height: 100%;
  padding: 10px 20px;
`;

const Bottom = styled.div`
  display: flex;
`;
const FilterBar = styled.div`
  flex: 1;
`;

const ProductsContainer = styled.div`
  flex: 3;
`;
const ProductList = () => {
  return (
    <Container>
      <Top>
        <Title>Men's Air Max(55)</Title>
        <FilterContainer>
          <FilterBox>Hide Filters</FilterBox>
          <FilterBox>Sort By</FilterBox>
        </FilterContainer>
      </Top>
      <Bottom>
        <FilterBar>sidebar</FilterBar>
        <ProductsContainer>
          Product area
          <Products />
        </ProductsContainer>
      </Bottom>
    </Container>
  );
};

export default ProductList;
