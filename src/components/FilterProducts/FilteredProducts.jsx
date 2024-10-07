import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../productCard/ProductCard';
function FilteredProducts() {
const products = useSelector((state)=>state.products.filteredProducts);
console.log("products" , products);
const {type} = useParams();
console.log("params" , type);

  return (
    <div>
      <div className='pt-16'>
        <div className='pl-14'>
            <h1 className='text-4xl text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center  gap-4 mx-auto'>
       {products.filter((product)=> product.type === type).map((product , index) => {
         return (<div key={index}>
          <ProductCard 
          id={product.id}
          name={product.name}
          text = {product.text}
          price = {product.price}
          color={product.color}
          img={product.img}/>
        </div>
         )
       }) }
      </div>
    </div>
  )
}

export default FilteredProducts
