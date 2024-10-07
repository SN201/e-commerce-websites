// import React , {useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// // import { Select, Option } from "@material-tailwind/react";
// import { Tooltip , Button } from '@material-tailwind/react';
// import {addToCart}  from '../../features/CartSlice/CartSlice';
// import { addToWhitelist } from '../../features/whishList/whishListSlice';
// function SingleProduct() {
//     const product  = useSelector((state)=>state.products.singleProduct);
//     console.log("singleProduct:",product);
//    const productSize = product[0].size ? product[0].size[0] : "";
//    const productColor = product[0].color ? product[0].color[0] : "";
//     const dispatch = useDispatch(); 
//     const {id} = useParams()
//     const [size , setSize] = useState(productSize);
//     const [color , setColor] = useState(productColor);
//     console.log("color:",color);


//    console.log("size:",size);
//   return (
//     <div>
//       {product.filter((product)=>product.id === id).map((product , index)=> {
//         return (
//             <div key={index}
//             className='flex justify-center items-center py-10'>
//                 <div className='pl-44 grow-[2]'>
//                     <img
//                      src={product.img}
//                       alt={product.name}
//                       className='h-[850px] rounded-lg'/>

//                 </div>
//             <div className='grow-[3]'>
//                 <div className='max-w-lg'>
//                     <h5 className='text-orange-500 text-xl font-inter font-bold tracking-normal pb-4'>{product.name}</h5>
//                     <p className='text-gray-600 text-xl font-inter font-bold tracking-normal pb-4'>{product.text}</p>
//                 </div>
//                 {product.size ? (
//                 <div className='pb-4'>
//                 <div className="w-72">
//                     <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Pick Size</label>
//                     <select 
//                     id='size'
//                     name='size'
//                     value={size}
//                     className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-gray-600 focus:border-r-indigo-300 block w-full'
//                     onChange={(e)=> {setSize(e.target.value)}}
//                    >
//                         {product.size.map((item , index)=>{
//                             return (
//                                 <option key={index} value={item}>{item}</option>
//                             )
//                         })}
//                     </select>
//                     </div>
//                 </div>
//                      ) 
//                     :(  <div className="w-72">
//                         <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Pick Size</label>
//                         <select 
//                         id='size'
//                         disabled={true}
//                         name='size'
//                         className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-gray-600 focus:border-r-indigo-300 block w-full'
//                        >
                           
//                         </select>
//                         </div>)}
//                      {product.color ? (
//                   <div className='pb-4'>
//                   <div className="w-72">
//                     <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Pick Color</label>
//                     <select 
//                     id='color'
//                     name='color'
//                     value={color}
//                     className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-gray-600 focus:border-r-indigo-300 block w-full'
//                     onChange={(e)=> {setColor(e.target.value)}}
//                    >
//                         {product.color.map((item , index)=>{
//                             return (
//                                 <option key={index} value={item}>{item}</option>
//                             )
//                         })}
//                     </select>
//                     </div>
//                 </div>):(<div className="w-72">
//                     <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Pick Color</label>
//                     <select 
//                     id='color'
//                     name='color'
//                     disabled={true}
//                     className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-gray-600 focus:border-r-indigo-300 block w-full' 
//                    >
                        
//                     </select>
//                     </div>)}
//                     <Tooltip content="" placement ="" >
//                     <Button onClick={()=>dispatch(addToCart({id :id , size :size , color:color,price:product.price , amount:1 , totalPrice:product.totalPrice , name:product.name , text:product.text , img:product.img  }))}
//                      color="gray" size = "lg" variant = "outline" ripple = "true" >
//                         Add to Card
//                     </Button>
//                     </Tooltip>
//                     <Tooltip content="" placement ="" >
//                     <Button onClick={()=>dispatch(addToWhitelist({id :id , size :size , color:color , amount:1  , name:product.name , text:product.text , img:product.img  }))}
//                      color="gray" size = "lg" variant = "outline" ripple = "true" >
//                         Add to Whish List
//                     </Button>
//                     </Tooltip>
//             </div>
            
//             </div>
//         )
//       })}
//     </div>
//   )
// }

// export default SingleProduct
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tooltip, Button } from '@material-tailwind/react';
import { addToCart } from '../../features/CartSlice/CartSlice';
import { addToWhitelist } from '../../features/whishList/whishListSlice';

function SingleProduct() {
  const product = useSelector((state) => state.products.singleProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const productSize = product[0].size ? product[0].size[0] : '';
  const productColor = product[0].color ? product[0].color[0] : '';
  
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  return (
    <div className="container mx-auto px-4">
      {product.filter((product) => product.id === id).map((product, index) => {
        return (
          <div key={index} className="flex flex-col lg:flex-row justify-center items-center py-10">
            {/* Left Section: Product Image */}
            <div className="lg:pr-10 sm:pr-0 sm:pb-6 grow-[2] flex justify-center">
              <img
                src={product.img}
                alt={product.name}
                className="max-w-full max-h-[500px] lg:max-h-[850px] rounded-lg object-contain"
              />
            </div>

            {/* Right Section: Product Details */}
            <div className="grow-[3] w-full lg:w-auto max-w-lg">
              <h5 className="text-orange-500 text-lg lg:text-xl font-bold tracking-normal pb-4">
                {product.name}
              </h5>
              <p className="text-gray-600 text-sm lg:text-lg font-semibold tracking-normal pb-4">
                {product.text}
              </p>

              {/* Size Dropdown */}
              {product.size ? (
                <div className="pb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pick Size
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={size}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-300 block w-full"
                    onChange={(e) => setSize(e.target.value)}
                  >
                    {product.size.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="pb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pick Size
                  </label>
                  <select
                    id="size"
                    name="size"
                    disabled
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-300 block w-full"
                  ></select>
                </div>
              )}

              {/* Color Dropdown */}
              {product.color ? (
                <div className="pb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pick Color
                  </label>
                  <select
                    id="color"
                    name="color"
                    value={color}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-300 block w-full"
                    onChange={(e) => setColor(e.target.value)}
                  >
                    {product.color.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="pb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pick Color
                  </label>
                  <select
                    id="color"
                    name="color"
                    disabled
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-300 block w-full"
                  ></select>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <Tooltip content="" placement="">
                  <Button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: id,
                          size: size,
                          color: color,
                          price: product.price,
                          amount: 1,
                          totalPrice: product.totalPrice,
                          name: product.name,
                          text: product.text,
                          img: product.img,
                        })
                      )
                    }
                    color="gray"
                    size="lg"
                    variant="outline"
                    ripple={true}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </Tooltip>

                <Tooltip content="" placement="">
                  <Button
                    onClick={() =>
                      dispatch(
                        addToWhitelist({
                          id: id,
                          size: size,
                          color: color,
                          amount: 1,
                          name: product.name,
                          text: product.text,
                          img: product.img,
                        })
                      )
                    }
                    color="gray"
                    size="lg"
                    variant="outline"
                    ripple={true}
                    className="w-full"
                  >
                    Add to Wishlist
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleProduct;
