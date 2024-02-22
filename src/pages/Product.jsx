import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.div``;

const Product = () => {
  return (
    <div>
      <Wrapper>
        <ImageContainer>
          <Image src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b1ebdb3-9043-492d-94bf-8ab78dccafb9/air-max-dn-shoes-FtLNfm.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Nike Air Max Dn</Title>
        </InfoContainer>
      </Wrapper>
    </div>
  );
};

export default Product;
