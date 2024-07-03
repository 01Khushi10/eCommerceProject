import React, { useContext, useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Products from '../components/Products'
import { ProductContext } from '../utils/Context'

const Home = () => {
    const [products] = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);
    const handleFilterChange = (filters) => {
        let filtered = products;

        if (filters.category) {
            filtered = filtered.filter(product => product.category === filters.category);
        }

        if (filters.priceRange) {
            const { min, max } = filters.priceRange;
            filtered = filtered.filter(product => product.price >= min && product.price <= max);
        }

        setFilteredProducts(filtered);
    };
  return (
    <div>
        <div className=' h-screen w-screen flex'>
            <div className=' '>
                <Filter onFilterChange={handleFilterChange} />
            </div>
            <div className='overflow-x-hidden overflow-y-auto w-[90%] '>
                <Products filteredProducts={filteredProducts} />
            </div>
        </div>
    </div>
  )
}

export default Home