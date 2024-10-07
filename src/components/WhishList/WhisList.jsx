import React from 'react'
import {
   Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { useSelector ,useDispatch } from 'react-redux';
import { removeFromWhishList } from '../../features/whishList/whishListSlice';
// import { Tooltip , Button } from '@material-tailwind/react';

function WhisList({openModal ,setOpen }) {
  const whishList = useSelector((state)=>state.whishList.whishList);
  const totalAmount = useSelector((state)=>state.whishList.totalAmount);
  const dispatch= useDispatch();
  return (
    <>
  { whishList.length > 0 ? (
  
    <Dialog open={openModal} handler={() => setOpen(false)} className="">
      <DialogHeader className="font-inter ">WishList </DialogHeader>

      {/* Dialog body with fixed height and scroll */}
      <DialogBody className="flex flex-col  h-[500px]   overflow-y-auto">
        {whishList.map((WhishItem, index) => (
          <div key={index} className="grid grid-cols-2 py-4 ">
             {/* {WhishItem.amount>0 ? ( */}
              
            <div>
              <img
                className="h-[125px] rounded-full"
                src={WhishItem.img}
                alt={WhishItem.id}
              />
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-black text-3xl font-inter py-2">
                {WhishItem.name}
              </h4>
              <div className="max-w-xs">
                <p className="text-black text-xs font-inter py-2">
                  {WhishItem.text}
                </p>
              </div>
              {WhishItem.size ? (
                <div>
                  <p>
                    Selected Size: <span>{WhishItem.size}</span>
                  </p>
                </div>
              ) : (
                ""
              )}
              <div>
                <p>
                  Selected Color:{" "}
                  <span
                    className="rounded-full translate-y-2 h-7 w-7 inline-block"
                    style={{ backgroundColor: WhishItem.color }}
                  ></span>
                </p>
              </div>
              <div>
                <p>Amount: <span>{WhishItem.amount}</span></p>
                
                <div className='py-2'><Button onClick={()=>{  
                  if(WhishItem.amount)
                  dispatch(removeFromWhishList(WhishItem)
                  )}}>Remove</Button></div>
              </div>
              </div>
            
            {/* ): ""} */}
          </div>
        ))}
      </DialogBody>

      {/* Dialog footer remains static, showing total price */}
      <DialogFooter>
        <div>
         
            <div>
              <p>Total Amount: <span>{totalAmount}</span></p>
            </div>

        </div>
      </DialogFooter>
    </Dialog>
  
):(
  <div>
    <Dialog open={openModal} handler={() => setOpen(false)}>
      <DialogHeader className="font-inter">Whish List </DialogHeader>
      <DialogBody>
        <h1 className="text-black text-3xl font-inter py-2">Your List  Is Empty</h1>
        <p className="text-black text-xl font-inter py-2">Add some products</p>
      </DialogBody>
    </Dialog>
  </div>
)}

    </>
  )
}

export default WhisList
