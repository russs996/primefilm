import React, { useContext } from 'react';
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


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        backgroundSize: 'contain'
    },
});


export default function MediaCard({ product }) {
    const classes = useStyles();
    const { addAndDeleteProductInCart, checkProductInCart } = useContext(clientContext)
    return (
        <Card className={classes.root}>
            <Link to={`/product-detail/${product.id}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.image}
                        style={{ width: "300px" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.yers}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Typography gutterBottom component="h4">
                    {product.price} $
                </Typography>
                <Button variant="contained" color="primary">
                    Buy
                </Button>
                {/* <IconButton variant="contained" color={checkProductInCart(product.id) ? "secondary" : "primary"} onClick={() => addAndDeleteProductInCart(product)}>

                    <ShoppingCart />
                </IconButton> */}
            </CardActions>
        </Card>
    );
};





