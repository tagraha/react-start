import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const StyledTitle = styled.h1`
  background: transparent;
  color: #9b56d0;
`;

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <Logo />
      <StyledTitle>React, Start</StyledTitle>
      <strong>Heavily modified of react universally</strong>
      <Menu />
    </div>
  );
}

export default Header;
