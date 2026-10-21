import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
