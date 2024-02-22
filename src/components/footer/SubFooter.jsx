import React from "react";
import styled from "styled-components";

const SubFooterContainer = styled.div`
  margin: 100px 200px;
  display: flex;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
`;

const ListHeader = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #555;
  margin-bottom: 15px;
`;

const List = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: gray;
`;

const SubFooter = () => {
  return (
    <SubFooterContainer>
      <ListContainer>
        <ListHeader>Icons</ListHeader>
        <List>Air Force 1</List>
        <List>Huarache</List>
        <List>Air Max 90</List>
        <List>Air Max 95</List>
        <List>Air Max 95</List>
        <List>Air Max 95</List>
        <List>Air Max 95</List>
        <List>Air Max 95</List>
        <List>Air Max 95</List>
      </ListContainer>
      <ListContainer>
        <ListHeader>Shoes</ListHeader>
        <List>All Shoes</List>
        <List>Custom Shoes</List>
        <List>Jordan Shoes</List>
        <List>Running Shoes</List>
        <List>All Shoes</List>
        <List>Custom Shoes</List>
        <List>Jordan Shoes</List>
        <List>Running Shoes</List>
      </ListContainer>
      <ListContainer>
        <ListHeader>Icons</ListHeader>
        <List>Air Force 1</List>
        <List>Huarache</List>
        <List>Air Max 90</List>
        <List>Air Max 95</List>
        <List>All Shoes</List>
        <List>Custom Shoes</List>
        <List>Jordan Shoes</List>
        <List>Running Shoes</List>
      </ListContainer>
      <ListContainer>
        <ListHeader>Icons</ListHeader>
        <List>Air Force 1</List>
        <List>Huarache</List>
        <List>Air Max 90</List>
        <List>Air Max 95</List>
        <List>All Shoes</List>
        <List>Custom Shoes</List>
        <List>Jordan Shoes</List>
        <List>Running Shoes</List>
      </ListContainer>
    </SubFooterContainer>
  );
};

export default SubFooter;
