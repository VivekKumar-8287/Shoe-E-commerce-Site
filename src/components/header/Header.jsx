import React from "react";
import styled from "styled-components";
import { GiGingerbreadMan } from "react-icons/gi";
import { SiNike } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { navList } from "../../data";
import { centerNavList } from "../../data";
import { Link } from "react-router-dom";

const TopHeader = styled.div`
  width: 100vw;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  align-items: center;
  padding: 0rem 4rem;
`;

const Img = styled.div``;

const Navigation = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const Nav = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-underline: none;
  color: black;
`;

const NavDiv = styled.span`
  padding: 0px 4px;
`;

const Bar = styled.span`
  padding-right: 4px;
`;

const CenterWrapper = styled.div`
  background-color: green;
  height: 64px;
  width: 100%;
  padding: 0rem 4rem;
  background-color: #fff;
  display: flex;
`;

const Logo = styled.div`
  flex: 1;
`;
const CenterNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CenNav = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const CenterIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-size: 27px;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 50px;
  width: 180px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  font-size: 18px;
  width: 100px;
`;

const BottomWrapper = styled.div`
  background-color: red;
  height: 64px;
  width: 100%;
  text-align: center;
  justify-content: center;
  background-color: #f5f5f5;
  margin-top: 10px;
`;

const DealTitle = styled.span`
  font-size: 20px;
`;

const Deallink = styled.li`
  list-style: none;
  font-size: 14px;
  text-decoration: underline;
  text-underline-position: auto;
`;

const NavList = ({ title }) => {
  return (
    <Nav>
      <NavDiv>{title}</NavDiv>
      <Bar>|</Bar>
    </Nav>
  );
};

const Header = () => {
  return (
    <TopHeader>
      <TopWrapper>
        <Img>
          <GiGingerbreadMan />
        </Img>
        <Navigation>
          {navList.map((el) => (
            <Link to={`/login`}>
              <NavList key={el.id} {...el} style={{}} />
            </Link>
          ))}
        </Navigation>
      </TopWrapper>
      <CenterWrapper>
        <Logo>
          <Link to="/">
            <SiNike style={{ fontSize: 64 }} />
          </Link>
        </Logo>
        <CenterNav>
          {centerNavList.map((el) => (
            <CenNav key={el.id}>{el.title}</CenNav>
          ))}
        </CenterNav>
        <CenterIcon>
          <SearchBox>
            <IoIosSearch />
            <Input type="text" placeholder="Search" />
          </SearchBox>
          <CiHeart />
          <IoBagOutline />
        </CenterIcon>
      </CenterWrapper>
      <BottomWrapper>
        <DealTitle>Save Up to 40%</DealTitle>
        <Deallink> Shop All Our News</Deallink>
      </BottomWrapper>
    </TopHeader>
  );
};

export default Header;
