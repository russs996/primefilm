import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext'

const useStyles = makeStyles({
    main: {
        marginTop: '65px',
        marginBottom: "20px",
        display: 'flex',
        justifyContent: "space-between"
    },
    divs: {
        flexDirection: "column",
        width: '20%',
        marginBottom: "20px",
    },
    buttonBlock: {
        marginBottom: "50px",
        width: '100%'
    },
    button: {
        width: "10%",
        padding: "10px",
        background: "grey",
        color: "white",
        alignItems: "center"
    },
})


const Add = () => {
    const classes = useStyles()
    const { createProduct } = useContext(adminContext)
    const [newProduct, setNewProduct] = useState({
        title: "",
        country: "",
        yers: "",
        rating: "",
        acters: "",
        category: "",
        image: "",
        movie: ""
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
            acters: "",
            category: "",
            image: "",
            price: "",
            movie: ""

        })
    }

    return (
        <>
            <div className={classes.main}>
                <div className={classes.divs}>
                    <TextField className={classes.text1} value={newProduct.title} onChange={handleInput} name="title" id="standart-basic" label="Название фильма" />
                    <TextField className={classes.text1} value={newProduct.country} onChange={handleInput} name="country" id="standart-basic" label="Страна" />
                </div>
                <div className={classes.divs}>
                    <TextField className={classes.text1} value={newProduct.yers} onChange={handleInput} name="yers" id="standart-basic" label="Год" />
                    <TextField className={classes.text1} value={newProduct.description} onChange={handleInput} name="description" id="standart-basic" label="Описание фильма" />
                </div>
                <div className={classes.divs}>
                    <TextField className={classes.text1} value={newProduct.rating} onChange={handleInput} name="rating" id="standart-basic" label="Рейтинг" />
                    <TextField className={classes.text1} value={newProduct.acters} onChange={handleInput} name="acters" id="standart-basic" label="Актеры" />
                </div>
                <div className={classes.divs}>
                    <TextField className={classes.text1} value={newProduct.category} onChange={handleInput} name="category" id="standart-basic" label="Жанр" />
                    <TextField className={classes.text1} value={newProduct.image} onChange={handleInput} name="image" id="standart-basic" label="Фото заставки" />
                </div>
                <div className={classes.divs}>
                    <TextField className={classes.text1} value={newProduct.price} onChange={handleInput} name="price" id="standart-basic" label="Цена" />
                    <TextField className={classes.text1} value={newProduct.movie} onChange={handleInput} name="movie" id="standart-basic" label="Фильмы" />
                </div>
            </div>
            <div className={classes.buttonBlock}>
                <button onClick={handleClick} className={classes.button}>ADD</button>
            </div>
        </ >
    );
};

export default Add;