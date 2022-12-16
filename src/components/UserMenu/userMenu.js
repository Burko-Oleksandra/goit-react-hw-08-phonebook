import React from 'react';

import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/slices/authSlice';
import { useUserLogoutMutation } from '../../redux/api/authApi';

import { Text, ButtonReg } from './UserMenu.styled';

export default function UserMenu() {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <>
      <Text>Hello, {name}!</Text>
      <ButtonReg
        type="button"
        onClick={() => {
          userLogout();
        }}
      >
        Log Out
      </ButtonReg>
    </>
  );
}
