import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import notificationPopup from '../../assets/notificationPopup.png'
import iphoneHeader from "../../assets/iphoneHeader1.png";


ReactDom.render(
    <Popup />,
    document.getElementById('popupContainer')
);

const StyledBackground = styled.background`
position: relative;
width: 414px;
height: 736px;
background: linear-gradient(90deg, #3CA55C 0%, #B5AC49 100%);
border-radius: 9px;
;`

export default NotificationScreen;
