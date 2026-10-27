import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export function Privacy() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <Stack spacing={2.5}>
          <Link component={RouterLink} to="/" underline="hover" variant="body2">
            Ambra
          </Link>
          <Typography variant="h1" sx={{ fontSize: '2rem' }}>
            Privacy policy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last updated: 21 October 2026
          </Typography>
          <Typography>
            This policy describes how the Ambra Android app (“Ambra”, “we”) handles personal data.
            Ambra is a small project. This page exists so the app can be listed and so Google
            sign-in can be offered; it is not legal advice.
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.15rem', pt: 1 }}>
            Who we are
          </Typography>
          <Typography>
            Ambra is operated by the developer of the app. Contact:{' '}
            <Link href="mailto:skalugerov@gmail.com">skalugerov@gmail.com</Link>.
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.15rem', pt: 1 }}>
            What the app does
          </Typography>
          <Typography>
            Ambra lets you keep motorcycles and cars, log maintenance and upgrades, track
            equipment, and attach invoice files. It is not a social network. Other people only see
            a vehicle if you turn on “Visible to other owners”.
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.15rem', pt: 1 }}>
            Data we store
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 3, color: 'text.primary' }}>
            <li>
              <Typography component="span">
                <strong>Account.</strong> Email address, and a display name if you set one.
              </Typography>
            </li>
            <li>
              <Typography component="span">
                <strong>Google sign-in.</strong> If you choose Sign in with Google, Google shares
                your email, name, and profile picture. We request only the openid, email, and
                profile scopes. We do not read Gmail, Drive, or other Google services.
              </Typography>
            </li>
            <li>
              <Typography component="span">
                <strong>Garage data.</strong> Vehicles, service entries, equipment, settings, and
                invoice files you upload.
              </Typography>
            </li>
            <li>
              <Typography component="span">
                <strong>Public vehicles.</strong> If you mark a vehicle public, signed-in users can
                read that vehicle and its service history. Your email stays private. Invoices,
                notes, and paperwork dates stay private.
              </Typography>
            </li>
          </Box>

          <Typography variant="h2" sx={{ fontSize: '1.15rem', pt: 1 }}>
            Where it is stored
          </Typography>
          <Typography>
            Data is stored in a Supabase project (hosted Postgres and file storage). Access is
            limited by row-level security so one account cannot read another account’s private
            rows.
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.15rem', pt: 1 }}>
            How we use it
          </Typography>
          <Typography>
            Only to run Ambra for you: sign you in, show your vehicles, and (if you opt in) show a
            public vehicle to other signed-in users. We do not sell data, run ads, or use Google
            user data for advertising.
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.15rem', pt: 1 }}>
            Retention and deletion
          </Typography>
          <Typography>
            Data stays until you delete it. You can delete individual vehicles, entries,
            equipment, and invoices in the app. Settings → Delete account removes the user and all
            associated Ambra data, including invoice files.
          </Typography>

          <Typography variant="h2" sx={{ fontSize: '1.15rem', pt: 1 }}>
            Your choices
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 3 }}>
            <li>
              <Typography component="span">You can use email and password instead of Google.</Typography>
            </li>
            <li>
              <Typography component="span">You can keep every vehicle private.</Typography>
            </li>
            <li>
              <Typography component="span">You can delete your account at any time in the app.</Typography>
            </li>
          </Box>

          <Box sx={{ pt: 2 }}>
            <Link component={RouterLink} to="/" underline="hover" variant="body2">
              Back
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
