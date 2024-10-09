import React from 'react'
import ProductSectionItem from './ProductSectionItem'
import { storeData } from '../../assets/data/dummyData'
import { useParams , Link } from 'react-router-dom';

function ProductsSection() {

  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 justify-center py-8 gap-4 mx-auto '>
        {storeData.slice(0,6).map((product,index)=> {
            return ( <Link to={"/filteredProducts/:type/"+product.id}  
            key={index}>
                <ProductSectionItem 
                id ={product.id} 
                name={product.name}
                 color={product.color}
                 size={product.size}
                 text={product.text}
                 totalPrice={product.totalPrice}
                 img={product.img}
                 price={product.price}/>

            </Link>
            )
        })}
        </div>
    </div>
  )
}

export default ProductsSection
