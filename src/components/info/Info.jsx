import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  width: 40vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Caption = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 900;
  line-height: 0.9;
  transform: scaleY(1.5);
`;
const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
`;

const Info = () => {
  return (
    <InfoContainer>
      <Caption>Caption</Caption>
      <Title>Title</Title>
      <Desc>desc</Desc>
      <ButtonContainer>
        <Button>btn</Button>
      </ButtonContainer>
    </InfoContainer>
  );
};

export default Info;
