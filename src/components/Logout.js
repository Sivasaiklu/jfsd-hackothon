import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
  },
});

export default function SignIn() {
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [idError, setIdError] = React.useState('');
  const [userEnteredId, setUserEnteredId] = React.useState('');
  const [generatedId, setGeneratedId] = React.useState(generateRandomId());

  const navigate = useNavigate();

  function generateRandomId() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    let valid = true;

    // Email validation
    if (!email.match(/@(gmail\.com|outlook\.com)$/)) {
      setEmailError('Email must be @gmail.com or @outlook.com');
      valid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long, include a lowercase letter, an uppercase letter, a number, and a special character.');
      valid = false;
    } else {
      setPasswordError('');
    }

    // ID verification
    if (userEnteredId !== generatedId.toString()) {
      setIdError('Please enter the correct 4-digit ID.');
      valid = false;
    } else {
      setIdError('');
    }

    if (valid) {
      // Redirect to Dashboard if validation passes
      navigate('/dashboard');
    } else {
      // Redirect to ErrorPage if validation fails
      navigate('/error');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!passwordError}
              helperText={passwordError}
            />
            <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
              Enter this 4-digit ID to verify: <strong>{generatedId}</strong>
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="idVerification"
              label="4-Digit ID"
              type="text"
              value={userEnteredId}
              onChange={(e) => setUserEnteredId(e.target.value)}
              error={!!idError}
              helperText={idError}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
