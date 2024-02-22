import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 90%;
  margin: auto;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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

const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <Image src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/bdca8181-69e2-4926-bbd0-0b8c833852a6/nike-just-do-it.jpg" />
      </ImageContainer>
      <InfoContainer>
        <Caption>Air Max 90 LV8</Caption>
        <Title>DOUBLE STACKED. DOUBLE FUN.</Title>
        <Desc>
          Play all day, dance all night in elevated, eye-catching comgfort.
          Introducing the all new Air Max 90 LV8, styled by NewJeans.
        </Desc>
        <ButtonContainer>
          <Button>Shop New Jeans' Picks</Button>
          <Button>Shop Air Max 90 LV8</Button>
        </ButtonContainer>
      </InfoContainer>
    </HeroContainer>
  );
};

export default Hero;
