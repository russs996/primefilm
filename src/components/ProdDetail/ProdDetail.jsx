import { Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clientContext } from '../../contexts/ClientContext';
import ReactPlayer from 'react-player/lazy'

const ProdDetail = () => {
    const { productDetail, getProductDetail } = useContext(clientContext)
    const { id } = useParams()
    useEffect(() => {
        getProductDetail(id)
        productDetail ? console.log(productDetail.movie) : console.log('12112')
    }, [id])
    useEffect(() => {
        console.log(productDetail)
    }, [productDetail])
    return (
        <div>
            <>
                <Paper style={{ backgroundColor: 'darkgray' }}>
                    {
                        productDetail ? (
                            <div >
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap'

                                }}>
                                    <img style={{ marginTop: '100px', marginLeft: '20px', width: '250px', position: 'absolute' }} src={productDetail.image} alt="" />
                                    <div style={{ marginTop: '100px', marginLeft: '300px' }}>
                                        <Typography variant='h3' gutterBottom>{productDetail.title}</Typography>
                                        <Typography variant='h6' gutterBottom>Жанры:{productDetail.category}</Typography>
                                        <Typography variant='body1' gutterBottom>Описание:<br />{productDetail.description}</Typography>
                                        <ReactPlayer style={{ display: 'flex', justifyContent: 'center', marginTop: '120px', marginBottom: '70px' }} controls={true} url={productDetail.movie} />
                                    </div>
                                </div>
                            </div>
                        ) : (<h1>Loading...</h1>)
                    }
                </Paper>
            </>
        </div >
    );
};

export default ProdDetail;