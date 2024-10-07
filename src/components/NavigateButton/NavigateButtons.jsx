import React from 'react';
import clothes from '../../assets/images/clothes.jpg' 
import { filteredProducts } from '../../features/productsSlice/producstsSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import {
   Button
  } from "@material-tailwind/react";
function NavigateButtons() {
    const buttons = ["Hoodies", "Dresses" , "Suits" , "Shoes" , "T-Shirts" , "Jeans" , "Bags","Jackets"]
    const dispatch = useDispatch();
  return (
    <div>
     <div className=' flex items-center justify-center py-4  flex-wrap'>
        {buttons.map((button, index) =>{
            return (
                <div key={index} className='mr-4 my-2'>
                   <Link to={"/filteredProducts/"+button}> <Button onClick={()=>dispatch(filteredProducts(button))}
                     className='bg-white text-black'>{button}</Button></Link>
                </div>

            )
        })}
     </div>
     <div className='bg-slate-400 p-2 w-[55%] mx-auto tracking-normal leading-none font-inter text-lg text-center'>
        <h3 className='text-orange-200 text-center text-lg font-inter font-bold'>SALES UP TO 50%</h3>
     </div>
     <div className="flex justify-center items-center py-4">
  <img
    src={clothes}
    alt="clothes"
    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md shadow-lg shadow-gray-600 object-cover"
  />
</div>

    </div>
  )
}

export default NavigateButtons
