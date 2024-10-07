// import { createSlice } from "@reduxjs/toolkit";
// export const cartSlice = createSlice({
//     name: "cart" , 
//     initialState :{
//         cart:[] , 
//         amount :0,
//         totalAmount : 0 ,
//         totalPrice : 0,
//     } , 
//     reducers :{
//         addToCart(state  , action ){
//             const productID = action.payload
//             try {
//                 const exist = state.cart.find((product)=>
//                     product.id === productID.id &&
//                     product.size === productID.size &&
//                     product.color === productID.color 

//                 );
//                 if (exist) {
//                     exist.amount++;
//                     exist.totalPrice  +=   productID.price;
//                     state.totalAmount++;
//                     state.totalPrice +=    productID.price
//                     exist.amount ++;
//                 }
//                 else {
//                     state.cart.push({
//                         id:productID.id , 
//                         price:productID.price , 
//                         size : productID.size , 
//                         amount :1 ,
//                         totalPrice:productID.price,
//                         name: productID.name,
//                         text:productID.text,
//                         img:productID.img,
//                         color:productID.color
//                     });
//                     state.totalAmount++;
//                     state.totalPrice += productID.price;
//                 }
//             } catch (error) {
//                 return error;
//             }
//         } ,
//         removeFromCart : (state , action) => {
//             const productID = action.payload ; 
//             try {
//                 const exist = state.cart.find((product)=>
//                     product.id === productID.id &&
//                     product.size === productID.size &&
//                     product.color === productID.color 

//                 );
//                 if (exist) {
//                     exist.amount--;
//                     exist.totalPrice  -=   productID.price;
//                     state.totalAmount--;
//                     state.totalPrice -=    productID.price
//                 }
//                 else {
//                   state.cart = state.cart.filter((product) => product.id !== productID.id || product.size !== productID.size || product.color !== productID.color)
//                     state.totalAmount--;
//                     state.totalPrice -= productID.price;
//                     exist.amount --;
//                     exist.totalPrice -= productID.price
//                 }
//             } catch (error) {
//                 return error;
//             }
//         }
//     }
// })
// export const {addToCart , removeFromCart} = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productID = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productID.id &&
            product.size === productID.size &&
            product.color === productID.color
        );
        if (exist) {
          // Increment amount and price if the item already exists
          exist.amount++;
          exist.totalPrice += productID.price;
          state.totalAmount++;
          state.totalPrice += productID.price;
        } else {
          // Add new item if it doesn't exist
          state.cart.push({
            id: productID.id,
            price: productID.price,
            size: productID.size,
            amount: 1,
            totalPrice: productID.price,
            name: productID.name,
            text: productID.text,
            img: productID.img,
            color: productID.color,
          });
          state.totalAmount++;
          state.totalPrice += productID.price;
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart(state, action) {
      const productID = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productID.id &&
            product.size === productID.size &&
            product.color === productID.color
        );
        if (exist) {
          // Decrease the amount and update the total price/amount
          exist.amount--;
          exist.totalPrice -= productID.price;
          state.totalAmount--;
          state.totalPrice -= productID.price;

          // If the amount is 0, remove the item from the cart
          if (exist.amount === 0) {
            state.cart = state.cart.filter(
              (product) =>
                !(
                  product.id === productID.id &&
                  product.size === productID.size &&
                  product.color === productID.color
                )
            );
          }
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
