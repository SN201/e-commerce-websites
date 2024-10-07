import React from 'react'
import {
   Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { useSelector ,useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/CartSlice/CartSlice';
// import { Tooltip , Button } from '@material-tailwind/react';

function Cart({openModal ,setOpen }) {
  const cart = useSelector((state)=>state.cart.cart);
  const totalPrice = useSelector((state)=>state.cart.totalPrice);
  const dispatch= useDispatch();
  return (
    <>
  { cart.length > 0 ? (
  
    <Dialog open={openModal} handler={() => setOpen(false)} className="">
      <DialogHeader className="font-inter ">Shopping Bag</DialogHeader>

      {/* Dialog body with fixed height and scroll */}
      <DialogBody className="flex flex-col  h-[500px]   overflow-y-auto">
        {cart.map((cartItem, index) => (
          <div key={index} className="grid grid-cols-2 py-4 ">
             {/* {cartItem.amount>0 ? ( */}
              
            <div>
              <img
                className="h-[125px] rounded-full"
                src={cartItem.img}
                alt={cartItem.id}
              />
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-black text-3xl font-inter py-2">
                {cartItem.name}
              </h4>
              <div className="max-w-xs">
                <p className="text-black text-xs font-inter py-2">
                  {cartItem.text}
                </p>
              </div>
              {cartItem.size ? (
                <div>
                  <p>
                    Selected Size: <span>{cartItem.size}</span>
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
                    style={{ backgroundColor: cartItem.color }}
                  ></span>
                </p>
              </div>
              <div>
                <p>Amount: <span>{cartItem.amount}</span></p>
                <p>Price: <span>{cartItem.price}</span></p>
                <div className='py-2'><Button onClick={()=>{  
                  if(cartItem.amount)
                  dispatch(removeFromCart(cartItem)
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
              <p>Total Price: <span>{totalPrice}</span></p>
            </div>

        </div>
      </DialogFooter>
    </Dialog>
  
) : (
  <div>
    <Dialog open={openModal} handler={() => setOpen(false)}>
      <DialogHeader className="font-inter">Shopping Bag</DialogHeader>
      <DialogBody>
        <h1 className="text-black text-3xl font-inter py-2">Your Bag Is Empty</h1>
        <p className="text-black text-xl font-inter py-2">Add some products</p>
      </DialogBody>
    </Dialog>
  </div>
)}

    </>
  )
}

export default Cart
