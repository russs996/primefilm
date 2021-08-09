import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext'
import Edit from './Edit';


const AddTable = () => {
    const { getProducts, products, getProductToEdit, deleteProduct } = useContext(adminContext)
    useEffect(() => {
        getProducts()
    }, [])

    const [changeId, setChangeId] = useState(null)

    const handleEditChange = (id) => {
        getProductToEdit(id)
        setChangeId(id)
    }



    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>#</TableCell>
                        <TableCell>Название фильма</TableCell>
                        <TableCell align="right">Фото заставки</TableCell>
                        <TableCell align="right">Описание фильма</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Актеры</TableCell>
                        <TableCell align="right">Год</TableCell>
                        <TableCell align="right">Продюссер</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products ? (

                            <>
                                {
                                    products.length ? (
                                        products.map(product => (
                                            <React.Fragment key={product.id}>
                                                {
                                                    changeId === product.id ? (
                                                        <Edit setChangeId={setChangeId} />
                                                    ) : (
                                                        <TableRow >
                                                            <TableCell align="right"> <button onClick={() => deleteProduct(product.id)}>DEL</button> </TableCell>
                                                            <TableCell align="right"> <button onClick={() => handleEditChange(product.id)}>EDIT</button> </TableCell>
                                                            <TableCell component="th" scope="row">{product.title}</TableCell>
                                                            <TableCell align="right"> <img width="100" src={product.image} /> </TableCell>
                                                            <TableCell align="right">{product.description}</TableCell>
                                                            <TableCell align="right">{product.price}</TableCell>
                                                            <TableCell align="right">{product.acters}</TableCell>
                                                            <TableCell align="right">{product.yers}</TableCell>
                                                            <TableCell align="right">{product.producer}</TableCell>
                                                        </TableRow>
                                                    )
                                                }

                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <h2>Товара в данный момент нету</h2>
                                    )
                                }
                            </>
                        ) : (
                            <h1>Loading...</h1>
                        )

                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AddTable;