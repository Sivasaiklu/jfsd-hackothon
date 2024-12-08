import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(true);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Validate email and password
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

    if (!valid) {
      setIsFormValid(false);
      return;
    }

    // Submit form if all validations are passed
    setIsFormValid(true);
    setErrorMessage(''); // Clear any previous error message
    axios.post("http://localhost:8080/user", {
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password')
    }).then((res) => {
      console.log(res.data);
      setSuccessMessage('Sign-up Successful! You can now log in.');
    }).catch((error) => {
      console.error('Error:', error);
      setErrorMessage('There was an issue signing you up. Please try again.');
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',  // Plain white background
            padding: 3, // Padding for better spacing
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          {/* Show success message */}
          {successMessage && (
            <Typography variant="body2" sx={{ marginBottom: 2, color: 'green', fontWeight: 'bold' }}>
              {successMessage}
            </Typography>
          )}

          {/* Show error message if there's any */}
          {errorMessage && (
            <Typography variant="body2" sx={{ marginBottom: 2, color: 'red', fontWeight: 'bold' }}>
              {errorMessage}
            </Typography>
          )}

          {/* Show error messages if form is not valid */}
          {!isFormValid && (
            <Typography variant="body2" sx={{ marginBottom: 2, color: 'red', fontWeight: 'bold' }}>
              Please fix the errors above.
            </Typography>
          )}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  fullWidth
                  labelId="role"
                  id="role"
                  name="role"
                  defaultValue={0}
                  label="Role"
                >
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>User</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#3f51b5' }}  // Button color customization
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}                            