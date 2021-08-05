import React from 'react';


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return { ...data, getProducts: action.payload }
    }
}

const CrudProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getProducts = async () => {
        const { data } = await axios(JSON_API)
        dispatch({
            type: "GET_PRODUCT",
            payload: data
        })
    }
    return (
        <CrudProvider value={{
            product: state, products,
            getProducts()
        }}>
            {children}
        </CrudProvider >
    );
};


export default Crud;