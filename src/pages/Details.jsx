import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Details = () => {
    const [product, setProduct] = useState(null)
    const {id} = useParams();
    // console.log(id);
    const getSingleProduct = async ()=>{
        try {
            const {data} = await axios.get(`/products/${id}`);
            // console.log(data);
            setProduct(data);
        } catch (error) {
            console.log("Error getting product");
        }
    }
    useEffect(()=>{
        getSingleProduct();
    },[])
  return (
    <div>
        {
            product ? 
            (
                <div className=' h-[100vh] w-[70%] flex lg:flex-row md:flex-col min-[320px]:flex-col sm:flex-col gap-6 justify-center items-center m-auto  p-[10%]'>
                    <div className=' '>
                        <img src={product.image} alt="" />
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <h1 className=' text-5xl'>{product.title}</h1>
                        <h3 className=' text-zinc-400'>{product.category}</h3>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            )
            :
            (<Spinner/>)
        }
    </div>
  )
}

export default Details