import { Grid } from '@material-ui/core';
import React, { useEffect, useContext } from 'react';
import { clientContext } from '../../contexts/ClientContext'
import MediaCard from './MediaCard';


const List = () => {
    const { getProducts, products } = useContext(clientContext)

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Grid container justify="space-evenly" margin="10px 0" className="list" style={{position:'relative'}}>
            {
                products ? (
                    products.length ? (
                        products.map(product => (
                            <MediaCard key={product.id} product={product} />
                        ))
                    ) : (
                        <h1>Нету Товара</h1>
                    )
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </Grid>
    );
};

export default List;