import { createTheme } from '@mui/material/styles';

export const navy = '#212854';
export const ink = '#161B3A';
export const flame = '#FF6A2B';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: flame },
    background: { default: navy, paper: ink },
    text: { primary: '#F3F5FB', secondary: '#9AA3C2' },
    divider: 'rgba(255,255,255,0.08)',
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontWeight: 500, letterSpacing: '-0.04em' },
    body1: { fontSize: '1.05rem', lineHeight: 1.6 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: navy,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: '#C9D0E8' },
      },
    },
  },
});
