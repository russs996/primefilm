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
                <Paper elevation={3} >
                    <Typography variant='h2' style={{ textAlign: 'center' }}>Better than Netflix</Typography>
                    {
                        productDetail ? (
                            <div >
                                <div>
                                    <img style={{ width: '300px' }} src={productDetail.image} alt="" />

                                </div>
                                <div style={{
                                    width: '200px',
                                    // display: 'flex',
                                    // flexWrap: 'wrap',
                                    // alignItems: 'center'
                                }}>
                                    <Typography variant='h3' gutterBottom>{productDetail.title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{productDetail.category}</Typography>
                                    <Typography variant='body1' gutterBottom>{productDetail.description}</Typography>
                                    <Typography variant='h4' gutterBottom>${productDetail.price}</Typography>
                                    <ReactPlayer controls={true} url={productDetail.movie} />
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