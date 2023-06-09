import React, { FC } from 'react';
import { Container, Toolbar } from '@mui/material';
import { NavTabs } from '../';
import { StyledAppBar } from './header.styled';

const Header: FC = () => (
  <StyledAppBar>
    <Container>
      <Toolbar>
        <NavTabs />
      </Toolbar>
    </Container>
  </StyledAppBar>
);

export default Header;
