import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'
import { useContext } from 'react';
import { authContext } from '../../contexts/AuthContext';

function Copyright() {
    
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const history = useHistory()
    const classes = useStyles();

    const { loginUser } = useContext(authContext)

  return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} >
            <Typography component="h1" variant="h5">
            Войти
            </Typography>
            <form onSubmit={(e) => loginUser(e, history)} className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email адресс"
                name="email"
                autoComplete="email"
                autoFocus
                style={{backgroundColor: 'white', borderRadius: '5px'}}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{backgroundColor: 'white', borderRadius: '5px'}}
            />
            <FormControlLabel
                control={<Checkbox value="remember" style={{color: 'black'}}/>}
                label="Запомни меня"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{backgroundColor: 'white'}}
                className={classes.submit}
            >
                Войти
            </Button>
            <Grid container>
                <Grid item xs>
                {/* <Link href="#" variant="body2" style={{color: 'black'}}>
                    Forgot password?
                </Link> */}
                </Grid>
                <Grid item>
                <Link href="/register" variant="body2" style={{color: 'blue'}}>
                    {"Нету аккаунта? Зарегистрируйся"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={12}>
            {/* <Copyright /> */}
        </Box>
        </Container>
  );
}