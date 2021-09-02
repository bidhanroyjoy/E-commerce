import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView'

const ProductList = () => {
    const {filtered_products:products}=useFilterContext();
    return (
        <GridView products={products}/>
         
    )
}

export default ProductList
