import React from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import { JSON_API } from '../helpers/constants';



export const clientContext = React.createContext()


const INIT_STATE = {
    products: null,
    paginatedPages: 1,
    productDetail: null
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 8)
            }
        case "GET_PRODUCT_DETAIL":
            return { ...state, productDetail: action.payload }
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
        const data = await axios(`${JSON_API}?_limit=8&${window.location.search}`)
        console.log(data)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const getProductDetail = async (id) => {
        const { data } = await axios(`${JSON_API}/${id}`)
        dispatch({
            type: "GET_PRODUCT_DETAIL",
            payload: data
        })

    }

    return (
        <>
            <clientContext.Provider value={{
                products: state.products,
                paginatedPages: state.paginatedPages,
                productDetail: state.productDetail,
                getProducts,
                getProductDetail
            }}>
                {children}
            </clientContext.Provider>
        </>
    );
};

export default ClientContextProvider;