import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  padding: 0rem 4rem;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
`;


const Heading = () => {
  return (
    <Container>
         <Title>Heading
         </Title>
    </Container>
  )
}

export default Heading