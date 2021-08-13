import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { clientContext } from '../../contexts/ClientContext';
import { Link } from 'react-router-dom';
import AOS from 'aos'


const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        height: 420,
        marginTop: 20,
        marginBottom: 50,
        backgroundColor: 'darkgrey'
    },
    media: {
        height: 250,
        backgroundSize: 'contain'
    },
});


export default function MediaCard({ product }) {
    const classes = useStyles();
    const { addProductInCart, checkProductInCart } = useContext(clientContext)
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);
    return (
        <div data-aos="zoom-in">
            <Card className={classes.root} >
                <Link to={`/product-detail/${product.id}`} style={{ textDecoration: 'none' }}>
                    <CardActionArea >
                        <Typography variant="body2" color="textSecondary" component="p" style={{ position: 'absolute' }}>
                            {product.yers}
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image={product.image}
                            style={{ width: "300px" }}
                        />
                        <CardContent style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="h2" style={{ color: 'black' }} >
                                {product.title}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions style={{ bottom: '0', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography gutterBottom component="h4">
                        {product.price} $
                    </Typography>
                    <IconButton
                        aria-label="share"
                        onClick={() => addProductInCart(product)}
                        color={checkProductInCart(product.id) ? "secondary" : "inherit"}
                    >
                        <ShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};





