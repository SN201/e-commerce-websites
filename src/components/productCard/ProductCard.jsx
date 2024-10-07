import React from 'react'
import { useDispatch } from 'react-redux'
import {singleProduct} from '../../features/productsSlice/producstsSlice'
import { useParams , Link } from 'react-router-dom';
function ProductCard({id ,img, name , text , price,color }) {
  const dispatch = useDispatch();
  const {type} = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
    <div
      onClick={() => dispatch(singleProduct(id))}
      className="grid grid-cols-1 gap-4 my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-4"
    >
      {/* First Image Section */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={img}
          alt="card-image"
          className="object-cover w-full h-full "
        />
      </div>


      {/* Product Details (shown after the images) */}
      <div className="p-4 col-span-2">
        <h6 className="mb-2 text-slate-800 text-sm sm:text-base lg:text-xl font-semibold">
          {name}
        </h6>
        <p className="text-slate-600 leading-normal text-xs sm:text-sm font-light">
          {text}
        </p>
      </div>

      {/* Price Section */}
      <div className="px-4 pb-4 pt-0 mt-2 text-xs sm:text-sm col-span-2">
        <p>{price}$</p>
      </div>

      {/* Color Options */}
      <div className="flex flex-row gap-3 mx-2 my-2 col-span-2">
        {color.map((color, index) => {
          return (
            <i
              key={index}
              style={{ backgroundColor: color }}
              className="w-6 h-6 sm:w-8 sm:h-8 border border-transparent rounded-full"
            ></i>
          );
        })}
      </div>
    </div>
  </Link>
  )
}

export default ProductCard

