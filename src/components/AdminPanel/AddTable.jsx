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
                        <TableCell align="left">Фото заставки</TableCell>
                        <TableCell align="left">Описание фильма</TableCell>
                        <TableCell align="left">Цена</TableCell>
                        <TableCell align="left">Актеры</TableCell>
                        <TableCell align="left">Год</TableCell>
                        <TableCell align="left">Фильм</TableCell>
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
                                                            <TableCell align="left"> <button onClick={() => deleteProduct(product.id)}>DEL</button> </TableCell>
                                                            <TableCell align="left"> <button onClick={() => handleEditChange(product.id)}>EDIT</button> </TableCell>
                                                            <TableCell component="th" scope="row">{product.title}</TableCell>
                                                            <TableCell align="left"> <img width="100" src={product.image} /> </TableCell>
                                                            <TableCell align="left">{product.description}</TableCell>
                                                            <TableCell align="left">{product.price}</TableCell>
                                                            <TableCell align="left">{product.acters}</TableCell>
                                                            <TableCell align="left">{product.yers}</TableCell>
                                                            <TableCell align="left"> <source url={product.movie} /> </TableCell>
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