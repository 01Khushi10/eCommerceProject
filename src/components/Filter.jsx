import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context'

const Filter = ({ onFilterChange }) => {
    const [products] = useContext(ProductContext);
    const [distinctCategory, setDistinctCategory] = useState([]);
    const [distinctPrice, setDistinctPrice] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const priceRanges = [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 to $100', min: 50, max: 100 },
        { label: '$100 to $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity },
    ];
    useEffect(() => {
        const categories = [...new Set(products.map(product => product.category))];
        const prices = [...new Set(products.map(product => product.price))].sort((a, b) => a - b);
        setDistinctCategory(categories);
        setDistinctPrice(prices);

    }, [products]);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        onFilterChange({ category, priceRange: selectedPriceRange });
    };

    const handlePriceChange = (priceRange) => {
        setSelectedPriceRange(priceRange);
        onFilterChange({ category: selectedCategory, priceRange });
    };
  return (
    <div className=' w-52 h-full bg-zinc-50 flex flex-col items-center gap-4'>
        <h2 className=' mt-4 text-2xl'>Category</h2>
        <ul>
                {distinctCategory.map((category, index) => (
                    <li
                        key={index}
                        className={`flex capitalize items-center gap-2 cursor-pointer ${selectedCategory === category ? 'font-bold' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        <span className='h-[15px] w-[15px] rounded-full bg-red-100'></span>
                        {category}
                    </li>
                ))}
            </ul>

        <h2 className='mt-2 text-2xl'>Price</h2>
            <ul>
                {priceRanges.map((range, index) => (
                    <li
                        key={index}
                        className={`flex items-center gap-2 cursor-pointer ${selectedPriceRange.label === range.label ? 'font-bold' : ''}`}
                        onClick={() => handlePriceChange(range)}
                    >
                        <span className='h-[15px] w-[15px] rounded-full bg-blue-100'></span>
                        {range.label}
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Filter