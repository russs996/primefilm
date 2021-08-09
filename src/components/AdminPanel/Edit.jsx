import { TableCell, TableRow } from '@material-ui/core';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const Edit = ({ setChangeId }) => {
    const { productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editProduct, setEditProduct] = useState(productToEdit)

    useEffect(() => {
        setEditProduct(productToEdit)
    }, [productToEdit])

    const handleInput = (e) => {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(obj)
    }

    const handleClick = () => {
        saveEditedProduct(editProduct)
        setChangeId(null)
    }

    return (
        <>
            {
                editProduct ? (
                    <TableRow >
                        <TableCell align="right"> <button disabled>DEL</button> </TableCell>
                        <TableCell align="right"> <button onClick={handleClick}>save</button> </TableCell>
                        <TableCell component="th" scope="row"><input onChange={handleInput} value={editProduct.title} type="text" name="title" /></TableCell>
                        <TableCell align="right"> <input onChange={handleInput} value={editProduct.image} type="text" name="image" /> </TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.description} type="text" name="description" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.price} type="namber" name="price" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.acters} type="text" name="acters" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.category} type="number" name="category" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.producer} type="text" name="producer" /></TableCell>
                    </TableRow>
                ) : (null)
            }

        </>
    );
};

export default Edit;