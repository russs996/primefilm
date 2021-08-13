import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../contexts/ClientContext';



const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        // width: '1440px'
        width: '93vw',
        margin: '20px'
        // marginRight: '20px',
        // marginBottom: '20px',
        // minWidth: '170px',  //TODO0 NEW (from 19.05.2021)
        // maxWidth: '100%'  //TODO0 NEW (from 19.05.2021)
    }
}))

const Sidebar = () => {
    const history = useHistory()
    const classes = useStyles()
    const { getProducts } = useContext(clientContext)
    const [category, setCategory] = useState(getCategory())


    function getCategory() {
        const search = new URLSearchParams(history.location.search)
        return search.get('category')
    }


    const handleChangeCategory = (event) => {
        if (event.target.value === 'all') {
            history.push(`${history.location.pathname.replace('category')}`)
            getProducts(history)
            setCategory(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('category', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setCategory(event.target.value)
    }

    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('type')}`)
        history.push(`${history.location.pathname.replace('price_lte')}`)
        getProducts(history)
        setCategory(getCategory())
    }

    return (
        <Grid item md={3}>
            <Paper elevation={2} className={classes.paper}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Жанры</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={category} onChange={handleChangeCategory} style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <FormControlLabel value="Драма" control={<Radio />} label="Драма" />
                        <FormControlLabel value="Фэнтези" control={<Radio />} label="Фэнтези" />
                        <FormControlLabel value="Аниме" control={<Radio />} label="Аниме" />
                        <FormControlLabel value="Мелодрама" control={<Radio />} label="Мелодрама" />
                        <FormControlLabel value="Ужасы" control={<Radio />} label="Ужасы" />
                        <FormControlLabel value="Мультфильмы" control={<Radio />} label="Мультфильмы" />
                        <FormControlLabel value="Комедия" control={<Radio />} label="Комедия" />
                        <FormControlLabel value="Фантастика" control={<Radio />} label="Фантастика" />
                    </RadioGroup>
                </FormControl>
                <Grid>
                    <Button variant='outlined' color='primary' onClick={handleDrop} >Сброс</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Sidebar;