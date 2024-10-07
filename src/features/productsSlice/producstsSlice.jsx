import { createSlice  } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
 export const productsSlice = createSlice({
    name:"products",
   initialState: {
    filteredProducts:JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct: JSON.parse(sessionStorage.getItem("oneProduct")) || storeData
   } , 
   reducers:{
    filteredProducts(state , action){
       try {
        const filter = storeData.filter((product)=> product.type === action.payload);
        state.filteredProducts = filter
        console.log("filter",filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData",saveState)
       } catch (error) {
        return error;
       } 
    } ,
    singleProduct(state, action){
      try {
         const  oneProduct =  storeData.filter((product)=> product.id === action.payload)
         console.log("oneProduct:",oneProduct);
         state.singleProduct = oneProduct;
         const saveState1 = JSON.stringify(oneProduct);
         sessionStorage.setItem("oneProduct",saveState1)

         
      } catch (error) {
         
      }
    },
   }
 })
 export const {filteredProducts , singleProduct} = productsSlice.actions;
 export default productsSlice.reducer  ;