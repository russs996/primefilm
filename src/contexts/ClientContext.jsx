import React from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import { JSON_API } from '../helpers/constants';



export const clientContext = React.createContext()


const INIT_STATE = {
    products: null
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
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
    return (
        <>
            <clientContext.Provider value={{
                products: state.products,
                getProducts
            }}>
                {children}
            </clientContext.Provider>
        </>
    );
};

export default ClientContextProvider;