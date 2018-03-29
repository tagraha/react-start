import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <Logo />
      <h1>React, Start</h1>
      <strong>Heavily modified of react universally</strong>
      <Menu />
    </div>
  );
}

export default Header;
