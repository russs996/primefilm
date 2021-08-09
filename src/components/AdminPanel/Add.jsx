import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext'

const useStyles = makeStyles({

})


const Add = () => {
    const classes = useStyles()
    const { createProduct } = useContext(adminContext)
    const [newProduct, setNewProduct] = useState({
        title: "",
        country: "",
        yers: "",
        rating: "",
        byPopularity: "",
        acters: "",
        category: "",
        image: "",
    })

    function handleInput(e) {
        let obj = {};
        if (e.target.name === 'price') {
            obj = {
                ...newProduct,
                [e.target.name]: +e.target.value
            }
        } else {
            obj = {
                ...newProduct,
                [e.target.name]: e.target.value
            }
        }
        setNewProduct(obj)
    }

    function handleClick() {
        createProduct(newProduct)
        setNewProduct({
            title: "",
            country: "",
            yers: "",
            description: "",
            rating: "",
            byPopularity: "",
            acters: "",
            category: "",
            image: "",
            price: ""

        })
    }

    return (
        <>
            <div className={classes.main}>
                <div className={classes.divs}>
                    <TextField value={newProduct.title} onChange={handleInput} name="title" id="standart-basic" label="Название фильма" />
                    <TextField value={newProduct.country} onChange={handleInput} name="country" id="standart-basic" label="Страна" />
                    <TextField value={newProduct.yers} onChange={handleInput} name="yers" id="standart-basic" label="Год" />
                    <TextField value={newProduct.description} onChange={handleInput} name="description" id="standart-basic" label="Описание фильма" />
                    <TextField value={newProduct.rating} onChange={handleInput} name="rating" id="standart-basic" label="Рейтинг" />
                    <TextField value={newProduct.byPopularity} onChange={handleInput} name="byPopularity" id="standart-basic" label="По популярности" />
                </div>
                <div className={classes.divs}>
                    <TextField value={newProduct.acters} onChange={handleInput} name="acters" id="standart-basic" label="Актеры" />
                    <TextField value={newProduct.category} onChange={handleInput} name="category" id="standart-basic" label="Категория" />
                    <TextField value={newProduct.image} onChange={handleInput} name="image" id="standart-basic" label="Фото заставки" />
                    <TextField value={newProduct.price} onChange={handleInput} name="price" id="standart-basic" label="Цена" />
                </div>
            </div>
            <div className={classes.buttonBlock}>
                <button onClick={handleClick} className={classes.button}>ADD</button>
            </div>
        </>
    );
};

export default Add;