import React, { createContext, useEffect, useState } from 'react'
import axios from "../utils/axios"


export const ProductContext = createContext();
const Context = (props) => {
    const [products, setProducts] = useState([]);
    const getProducts = async()=>{
        try {
            const {data} = await axios("/products");
            setProducts(data);
        } catch (error) {
            console.log("Error getting products")
        }
    }
    useEffect(()=>{
        getProducts();
    },[])
  return (
    <ProductContext.Provider value={[products, setProducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context