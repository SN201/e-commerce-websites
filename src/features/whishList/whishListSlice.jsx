import { createSlice } from "@reduxjs/toolkit";
export const whishListSlice = createSlice({
name: "whishList",
initialState: {
    whishList: [],
    amount: 0, 
    totalAmount: 0,
} , 
reducers: {
addToWhitelist(state, action) {
    const productID = action.payload;
    try {
      const exist = state.whishList.find(
        (product) =>
          product.id === productID.id &&
          product.size === productID.size &&
          product.color === productID.color
      );
      if (exist) {
        // Increment amount and price if the item already exists
        exist.amount++;
        state.totalAmount++;
      } else {
        // Add new item if it doesn't exist
        state.whishList.push({
          id: productID.id,
          size: productID.size,
          amount: 1,
          name: productID.name,
          text: productID.text,
          img: productID.img,
          color: productID.color,
        });
        state.totalAmount++;
      }
    } catch (error) {
      return error;
    }
  },
  removeFromWhishList(state, action) {
    const productID = action.payload;
    try {
      const exist = state.whishList.find(
        (product) =>
          product.id === productID.id &&
          product.size === productID.size &&
          product.color === productID.color
      );
      if (exist) {
        // Decrease the amount and update the total amount
        exist.amount--;
        state.totalAmount--;

        // If the amount is 0, remove the item from the whishList
        if (exist.amount === 0) {
          state.whishList = state.whishList.filter(
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
export const  {addToWhitelist , removeFromWhishList} = whishListSlice.actions;
export default  whishListSlice.reducer;