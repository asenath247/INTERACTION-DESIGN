import React from "react";
import styled from "styled-components";
import iphoneHeader from "../../assets/iphoneHeader1.png";
import notificationIcon from "../../assets/notificationIcon.png";
import notificationBox from "../../assets/notificationBox.png";
import hmburgerBackground from "../../assets/hmburgerBackground.png";


const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  color: #fff;
  padding: 1rem 5rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 0.20rem;
  box-shadow: 0 0 0.6rem rgba(0, 0, 0.3);
 cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 5%;
`;

const closeAllMenusOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({areMenusOpen: false});
    }
  };

  return (
    <StyledButton
      color={disabled ? "black" : color}
      disabled={disabled}
      {...other}
    >
      {" "}
      {children}{" "}

    </StyledButton>
  );
};

const hamburgerMenu= () => {
  const handleMouseOver = (e) => {
    debugger;
    console.log("mouse is over me");
  };

  return (
    <StyledWrapper>
      <Button onMouseOver={handleMouseOver} color="#6200ee">

        {" "}
        Button{" "}
      </Button>
      <Button color="#"> Button 2 </Button>

      <Button color="#1280ee"> Button 3 </Button>
    </StyledWrapper>

  );

};

export default hamburgerMenu;
export default {pushRotate: require('./menus/pushRotate');
