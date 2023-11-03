import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;

  .title {
    text-transform: uppercase;
    text-decoration: overline;
    color: brown;
    transition: all 0.3s;

    &:hover,
    &:focus {
      background-color: yellow;
      color: blue;
    }
  }

  .header-link {
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: grey;
  border: 1px solid black;
  border-radius: 15px;
  display: inline-block;
  padding: 15px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.4s;

  &.active {
    border: 1px solid white;
    background-color: grey;
    color: black;
  }
`;
