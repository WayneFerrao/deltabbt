import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import NoSsr from '@material-ui/core/NoSsr';

const StyledButton = styled(({ color, ...other }) => <Button {...other} />)`
  background: linear-gradient(45deg, #090979 0%, #ff006c 100%);
  border: 0;
  color: black;
  height: 48px;
  padding: 0 30px;
  z-index: 100;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);

  & .MuiButton-label {
    color: ${props => props.color};
  }

`;

export default function LoginButton() {
  return (
    <NoSsr>
      <div>
        <StyledButton color="white">Login</StyledButton>
      </div>
    </NoSsr>
  );
}