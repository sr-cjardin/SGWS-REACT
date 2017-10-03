import React from 'react'
import styled from 'styled-components';
import logo from '../../Assets/svg/logo.svg';

const LogoStyle = styled.div`
    width: 110px;
    height: 110px;
`;

const Logo = () => (
    <LogoStyle>
        <img src={logo} alt="SGWS"/>
    </LogoStyle>
);

export default Logo;