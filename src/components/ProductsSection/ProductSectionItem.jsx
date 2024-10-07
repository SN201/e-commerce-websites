import React from 'react'
import {  Button } from '@material-tailwind/react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/CartSlice/CartSlice';
function ProductSectionItem({id , name , text , img , size , price , color , totalPrice }) {
    const dispatch = useDispatch();
    const defaultSize = size[0] ; 
    const defaultColor = color[0] ;
  return (
    <div>
     <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-86">
  <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
    <img className="w-full h-full object-cover" src={img} alt={name} />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-1 text-xl font-semibold text-slate-800">
     {name}
    </h4>
    <p className="text-base text-slate-600 mt-4 font-light ">
      <span>Size : </span> {defaultSize}
    </p>
    <p> <span>Color : </span>
    <span
     className="rounded-full translate-y-2 h-7 w-7 inline-block"
     style={{ backgroundColor: defaultColor }}
    ></span>
    </p>
    <p className="text-base text-slate-600 mt-4 font-light ">
       {text}
    </p>
  </div>
  <div className="flex justify-center p-6 pt-2 gap-7">
    <Button  
     onClick={()=>dispatch(addToCart({id :id , size :defaultSize , color:defaultColor, price:price , amount:1 , totalPrice:totalPrice , name:name , text:text , img:img  }))}
     className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm bg-black text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     Add To Cart
    </Button>
  </div>
</div>
    </div>
  )
}

export default ProductSectionItem
