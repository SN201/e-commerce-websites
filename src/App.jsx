
import './App.css'
import Main from './components/Main/Main'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import FilteredProducts from './components/FilterProducts/FilteredProducts'
import SingleProduct from './components/singleProduct/SingleProduct'
import { useSelector } from 'react-redux'
function App() {
const cart = useSelector((state)=> state.cart.cart);
const whishList = useSelector((state)=> state.whishList.whishList);
const totalAmountForWhishList = useSelector((state)=> state.whishList.totalAmount);
const totalAmount = useSelector((state)=> state.cart.totalAmount);
const totalPrice = useSelector((state)=> state.cart.totalPrice);
console.log("cart:" , cart);
console.log("totalAmount:" , totalAmount);
console.log("totalPrice:" , totalPrice);
console.log("##################");
console.log("WhishList:" , whishList);
console.log("totalAmount For WhishList:" , totalAmountForWhishList);




  return (
    <>
       <Router>
       <Routes>
        <Route  path="/" element={<Main/>}/>
        <Route  path="/filteredProducts/:type" element={<FilteredProducts/>}/>
        <Route  path="/filteredProducts/:type/:id" element={<SingleProduct/>}/>
       </Routes>
      </Router>
    </>
  )
}

export default App
