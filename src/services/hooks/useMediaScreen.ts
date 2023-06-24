import { Theme, useMediaQuery } from '@mui/material';

type IScreen = 'mobile' | 'tablet' | 'desktop';

export default function useMediaScreen(device: IScreen) {
  switch (device) {
    case 'mobile':
      return useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    case 'tablet':
      return useMediaQuery(
        (theme: Theme) => theme.breakpoints.between('md', 'lg') // md = 768px
      );
    case 'desktop':
      return useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')); // lg = 1280px
    default:
      return useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  }
}
