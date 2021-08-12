import React from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import { JSON_API } from '../helpers/constants';
import { calcSubPrice, calcTotalPrice } from '../helpers/CalcPrice';



export const clientContext = React.createContext()


const INIT_STATE = {
    products: null,
    cart: {},
    cartLength: 0
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        case "CHANGE_CART_COUNT":
            return{...state, cartLength: action.payload}
        case "GET_CART":
            return{...state, cart: action.payload}
        default:
            return state
    }
}

const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async (history) => {
        const search = new URLSearchParams(window.location.search)
        search.set('_limit', 8)
        history ? history.push(`${history.location.pathname}?${search.toString()}`) : console.log(null);
        const { data } = await axios(`${JSON_API}?_limit=8&${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }
    const addProductInCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }

        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }

        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length > 0) {
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        }else {
            cart.products.push(newProduct)
        }
        newProduct.subPrice = calcSubPrice(newProduct)
        cart.totalPrice= calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }

    const getCartLength = () =>{
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(elem =>{
            if(elem.item.id === id){
                elem.count = count
                elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }

    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false
    }


    return (
        <>
            <clientContext.Provider value={{
                products: state.products,
                cart: state.cart,
                cartLength: state.cartLength,
                getProducts,
                getCart,
                addProductInCart,
                changeProductCount,
                checkProductInCart,
                getCartLength
            }}>
                {children}
            </clientContext.Provider>
        </>
    );
};

export default ClientContextProvider;