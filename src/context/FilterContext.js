import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/FilterReducer'
import {LOAD_PRODUCTS} from '../Actions'
import {useProductsContext} from '../context/ProductsContext'

const initialState = {
    filtered_products: [],
    all_products:[],
}

const FilterContext=React.createContext()

export const FilterProvider=({children})=>{
    const{products}=useProductsContext()
    const[state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        dispatch({type:LOAD_PRODUCTS, payload:products})
    },[products])
    return(
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext=()=>{
    return useContext(FilterContext)
}
