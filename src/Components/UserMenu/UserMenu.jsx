import { StyledButton } from 'Components/ContactForm/ContactForm.styled.';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div>
      <p>{user.name}</p>
      <StyledButton onClick={onLogOut}>Log Out</StyledButton>
    </div>
  );
};

export default UserMenu;
