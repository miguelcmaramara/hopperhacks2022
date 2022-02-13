import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStoreContext } from '../store';
import { useContext } from 'react';

const theme = createTheme();

export default function Submit() {
  const {store} = useContext(GlobalStoreContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    //Obtain data from form field
    const data = new FormData(event.currentTarget);    
    let enteredData = {
        contributorSource: data.get('source'),
        contributorAmount: data.get('amount'),
        contributorType: data.get('type')
    };
    console.log(enteredData);
    store.addContributor(data.get('source'), data.get('amount'), data.get('type'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            CO<sub>2</sub> Contributor Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="source"
                  label="Contributor Source"
                  name="source"
                  autoComplete="source"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="quantity"
                  label="Contributor Quantity"
                  type="quantity"
                  id="quantity"
                  autoComplete="Contributor Quantity"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label="Contributor Type"
                  name="type"
                  autoComplete="type"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Contributor Details
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}