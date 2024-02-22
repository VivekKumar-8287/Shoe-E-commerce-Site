import React from "react";
import SubFooter from "./SubFooter";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #111111;
  color: white;
  padding: 60px 60px 20px;
`;
const TopContainer = styled.div`
  display: flex;
`;
const LinkContainer = styled.div`
  flex: 3;
  display: flex;
  gap: 100px;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListHeader = styled.h1`
  font-size: 14px;
`;
const LinkList = styled.span`
  font-size: 14px;
  color: #7e7e7e;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Logo = styled.div`
  width: 36px;
  height: 36px;
  background-color: #7e7e7e;
  border-radius: 18px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 30px;
  color: #7e7e7e;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  color: #7e7e7e;
`;

const Footer = () => {
  return (
    <div>
      <SubFooter />
      <FooterContainer>
        <TopContainer>
          <LinkContainer>
            <ListContainer>
              <ListHeader>FIND A STORE</ListHeader>
              <ListHeader>BECOME A MEMBER</ListHeader>
              <ListHeader>Send Us Feedback</ListHeader>
            </ListContainer>
            <ListContainer>
              <ListHeader>GET HELP</ListHeader>
              <LinkList>Order Status</LinkList>
              <LinkList>Order Status</LinkList>
              <LinkList>Delivery</LinkList>
              <LinkList>Returns</LinkList>
              <LinkList>Payment Options</LinkList>
              <LinkList>Contact Us</LinkList>
              <LinkList>Contact Us</LinkList>
            </ListContainer>
            <ListContainer>
              <ListHeader>ABOUT NIKE</ListHeader>
              <LinkList>News</LinkList>
              <LinkList>Careers</LinkList>
              <LinkList>Investors</LinkList>
              <LinkList>Sustainbility</LinkList>
            </ListContainer>
          </LinkContainer>
          <LogoContainer>
            <Logo>
              <FaTwitter />
            </Logo>
            <Logo>
              <FaFacebookF />
            </Logo>
            <Logo>
              <TfiYoutube />
            </Logo>
            <Logo>
              <ImInstagram />
            </Logo>
          </LogoContainer>
        </TopContainer>
        <BottomContainer>
          <Left>
            <div style={{ color: "white" }}>India</div>
            <div>c 2023 Nike Inc. All Rights Reserved</div>
          </Left>
          <Right>
            <div>Guides</div>
            <div>Terms of Sale</div>
            <div>Terms of Use</div>
            <div>Nike Privacy Policy</div>
          </Right>
        </BottomContainer>
      </FooterContainer>
    </div>
  );
};

export default Footer;
