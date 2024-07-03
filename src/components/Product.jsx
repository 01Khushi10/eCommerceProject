import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {title, image, price, description} = product;
  return (
    <div>
        <Link to={`/details/${product.id}`} className='flex flex-col items-start justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-4 rounded-xl outline'>
            <div className="h-[180px]">
                <img loading='lazy' className=' w-[180px] h-full object-contain rounded-lg' src={image} alt={title} />
            </div>
            <div className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
                <p>
                {title}
                </p>
            </div>
            <div className="flex justify-between gap-10 items-center w-full">
                <p className="text-green-600 font-semibold">${price}</p>
            </div>
            <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
                <p>{description.split(" ").splice(0,10).join(" ")+"..."}</p>
            </div>
        </Link>
    </div>
  )
}

export default Product