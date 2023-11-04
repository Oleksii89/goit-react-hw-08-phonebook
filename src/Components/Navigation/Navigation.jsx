import React from 'react';
import { StyledNavLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <header>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>

        {authenticated ? (
          <>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <button>Log Out</button>
          </>
        ) : (
          <>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
