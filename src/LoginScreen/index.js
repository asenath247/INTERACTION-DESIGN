import React, { useState } from "react";
import styled from "styled-components";
import iphoneHeader from "../../assets/iphoneHeader1.png";
import arrowIcon from "../../assets/startArrow1.png";
import greenBlob from "../../assets/lightGreenBlob1.png";
import pinkblob1 from "../../assets/pinkblob1.png"
import logo1 from "../../assets/logo1";
import darkModeToggle from "../../assets/darkModeIcon.png";
import progressIndicator from "../../assets/progressIndicator.png";
import verifiedFingerprint from "../../assets/verifiedFingerprint.png";
import skipButton from "../../skipButton.png";
import backArrow from "../../assets/backArrow.png";
import socialMediaGroup from "./../assets/socialMediaGroup.png";
import homeScreenInterface from "../../assets/homeScreenInterface.png";
import userProfileIcon from "./../assets/userProfileIcon.png";
import darkModeToggle2 from "./../assets/darkModeToggle2.png";
import greenBlob2 from "./../assets/greenBlob2.png";
import lightGreenBlob from "./s../assets/lightGreenBlob.png";
import DarkBackArrow from "./../assets/DarkBackArrow.png";
import DarkskipButton from "./../assets/DarkskipButton.png";
import DarkModehomeScreenInterface from "./../assets/DarkModehomeScreenInterface.png";
import Orb from "./../Orb.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Not a valid email"),
    password: hello.string().required("Password is required"),

});

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  font-family:'Monseratt', sans-serif;
`;

const StyledHeader = styled.h1`
  margin-left: 2rem;
`;

const StyledInput = styled.input`
  background: #FFADB6, #FFFFFF, #B5FF8C;
  height: 50px;
  width: 300px;
  padding-left: 10px;
  font-size:  19px;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 350px;
  color: #FF5D6E;
  text-align: center;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: pink;
  }
`;

const StyledErrorText = styled.p`
  color: red;
`;
const LoginScreen1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);

  }

  const handleClick = (e) => {
    setShowPassword(!showPassword);
  };

  return (

    <StyledWrapper>

      <img src={iphoneHeader} /><StyledHeader>  </StyledHeader>
      {submitted && <h1> </h1>}
      {!submitted && }}
      <form onSubmit={handleSubmit(onSubmit)}>

<p>

  <StyledInput
    type="text"
    name="email"
    placeholder="Email"
    ref={register()}
  />
</p>
<StyledErrorText> {errors.email?.message}</StyledErrorText>




<p>
  <StyledInput
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    ref={register()}
  />

  <StyledIcon src={showPassword ? hideIcon : showIcon} onClick={handleClick}
  ></StyledIcon>
  <StyledErrorText> {errors.password?.message}</StyledErrorText>

</p>

<p>
  <StyledButton> Login </StyledButton>
</p>

</form>)

</StyledWrapper>
);

};
export default LoginScreen1;
