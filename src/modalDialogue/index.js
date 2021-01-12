import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import modalDialogue from '../../assets/modalDialogue.png'
import iphoneHeader from "../../assets/iphoneHeader1.png";


ReactDom.render(
    <Popup />,
    document.getElementById('popupContainer')
);

const StyledBackground = styled.background`
position: absolute;
width: 397px;
height: 390px;
left: 7px;
top: 131px;

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)), 
drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)), 
drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
;`

export default NotificationScreen;
