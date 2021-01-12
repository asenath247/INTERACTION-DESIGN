import React, { useState } from "react";
import iphoneHeader from "../../assets/iphoneHeader1.png";
import Wave_1 from "./../../assets/Wave_1.png";
import Wave_2 from "./../../assets/Wave_2.png";
import Wave_3 from "./../../assets/Wave_3.png";
import Wave_4 from "./../../assets/Wave_4.png";
import Wave_5 from "./../../assets/Wave_5.png";
import Wave_6 from "./../../assets/Wave_6.png";
import Wave_7 from "./../../assets/Wave_7.png";
import loaderScreen from "./../../assets/loaderScreen.gif";


const loaderScreen = (props: { isLoaded: boolean }) => {
    const className = props.isLoaded ? "loaded" : "";
    return <div className={className}> ~~~ </div>;
  };
  
const loaderScreen =
position: relative;
width: 500px;
height: 740px;
background: linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%);
};

  export default loaderScreen
  });



