import { styled } from '@mui/material/styles';
import AppBar, { AppBarProps } from '@mui/material/AppBar';

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  boxShadow: 'none',
}));
