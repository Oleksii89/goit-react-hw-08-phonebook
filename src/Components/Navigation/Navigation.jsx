import React from 'react';
import { StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <header>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </nav>
    </header>
  );
};

export default Navigation;
