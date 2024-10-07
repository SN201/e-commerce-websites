import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice"
import productsReducer from "../features/productsSlice/producstsSlice";
import CartReducer from "../features/CartSlice/CartSlice";
import whishListReducer from "../features/whishList/whishListSlice";
export const store = configureStore({
    reducer:{
        slider: sliderReducer,
       products: productsReducer , 
       cart : CartReducer , 
       whishList : whishListReducer,
    },
})