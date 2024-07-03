import React, { useContext, useEffect, useState } from 'react'
import Spinner from './Spinner';
import Product from './Product';
import { ProductContext } from '../utils/Context';

const Products = ({filteredProducts}) => {
    const [loading, setLoading] = useState(false);
    const [products] = useContext(ProductContext);
    
    
    // const [data, setData] = useState([]);
    // const url='https://fakestoreapi.com/products';
    // useEffect(()=>{
    //     setLoading(true);
    //     const fetchApi = async()=>{
    //         try {
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             console.log(data);
    //             setData(data);
    //             setLoading(false);
                
    //         } catch (error) {
    //             console.log("Error fetching");
    //             setLoading(false);
    //         }
    //     }
    //     fetchApi();
    // },[])
  return (
    <div>
        {loading ? 
        (<div><Spinner/></div>)
        :
        (
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 justify-items-center mb-5 mr-4'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <div className=' h-full text-2xl text-green-600 m-auto p-4'>
                        No Product Found
                    </div>
                )}
            </div>
        )}
    </div>
  )
}

export default Products