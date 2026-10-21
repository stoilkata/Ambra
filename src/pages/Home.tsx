import { Box, Link, Stack, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';

const rise = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export function Home() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 6,
        background:
          'radial-gradient(ellipse at 50% 30%, #2a3170 0%, #212854 55%, #161b3a 100%)',
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          animation: `${rise} 0.9s ease both`,
          textAlign: 'center',
          maxWidth: 520,
        }}
      >
        <Box
          component="img"
          src={`${import.meta.env.BASE_URL}mark.png`}
          alt="Ambra"
          sx={{
            width: 'min(72vw, 420px)',
            height: 'auto',
            display: 'block',
          }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '1.35rem', sm: '1.7rem' },
            fontWeight: 400,
            color: 'text.primary',
            letterSpacing: '-0.03em',
          }}
        >
          The book that rides with you.
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 400 }}>
          Bikes and cars. What you did, when, at which kilometre, what it cost.
          Receipts in the glovebox. The road comes later.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.7 }}>
          Android · private beta
        </Typography>
      </Stack>

      <Box sx={{ position: 'absolute', bottom: 28 }}>
        <Link component={RouterLink} to="/privacy" underline="hover" variant="body2">
          Privacy
        </Link>
      </Box>
    </Box>
  );
}
