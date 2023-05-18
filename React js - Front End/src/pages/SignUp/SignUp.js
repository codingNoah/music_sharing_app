import React, { useEffect, useRef } from "react";

import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { removeErrorMessage, signUp } from "../../Redux/auth/authSlice";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 200px;

  align-items: center;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: #333;
  font-size: 16px;
  margin: 10px 0px;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const { errorMessage, isLogged } = useSelector((state) => state.auth);

  const handleSignUp = () => {
    if (!username.current.value) {
      username.current.style.border = "1px solid red";
      if (!password.current.value) {
        password.current.style.border = "1px solid red";
      }
      return;
    }
    if (!password.current.value) {
      username.current.style.border = "none";
      password.current.style.border = "1px solid red";
      return;
    }

    dispatch(
      signUp({
        username: username.current.value,
        password: password.current.value,
      })
    );
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/");
      return;
    }
  }, [isLogged, navigate]);

  return (
    <Container>
      <section>
        <h2 style={{ textAlign: "center" }}>
          <AccountCircleRoundedIcon style={{ fontSize: "120px" }} />
        </h2>
        <InputContainer>
          <Input ref={username} type="text" placeholder="Username*" />
          <Input ref={password} type="password" placeholder="Password*" />
        </InputContainer>
        <Button onClick={handleSignUp}>SignUp</Button>
      </section>
      <section style={{ marginTop: "10px" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
            dispatch(removeErrorMessage());
          }}
        >
          LogIn
        </span>
      </section>
      {errorMessage && (
        <span style={{ color: "red", marginTop: "10px" }}>{errorMessage}</span>
      )}
    </Container>
  );
};

export default SignUp;
