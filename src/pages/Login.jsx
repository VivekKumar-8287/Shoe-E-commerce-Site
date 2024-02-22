import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
const FormContainer = styled.form`
  width: 35vw;
  padding: 30px;
  border: 2px solid red;
`;

const Title = styled.h1``;

const Input = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 10px;
  border: 2px solid gray;
  border-radius: 10px;
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
const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Enter your email to join us or sign in.</Title>
        <p>
          India <span>Change</span>
        </p>
        <Input type="email" placeholder="Email*" />
        <p>
          By continuing, I agree to Nike's <span>Privacy Policy</span> and{" "}
          <span>Terms of Use.</span>
        </p>
        <Button>Continue</Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
