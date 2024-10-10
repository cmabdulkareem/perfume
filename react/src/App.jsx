import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import DashBoard from "./Components/Dashboard";
import Products from "./Components/Dashboard/Products";
import AddProducts from "./Components/Dashboard/AddProducts";
import Orders from "./Components/Dashboard/Orders";
import Reports from "./Components/Dashboard/Reports";
import EditProduct from "./Components/Dashboard/EditProduct";
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";


function App() {
//logic goes here
 

  return (
     <>
       <Routes>
          <Route path="/" element={<PrivateRoute><DashBoard/> </PrivateRoute>}>
              <Route path="products" element ={<Products/>} />
              <Route path="addproducts" element={<AddProducts/>}/>
              <Route path= "editproduct/:id" element ={<EditProduct/>}/>
              <Route path="orders" element={<Orders/>}/>
              <Route path="reports" element={<Reports/>}/>
          </Route>

          <Route path="/register" element={<Register/>}/>
          <Route path="/admin-login" element={<Login/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
       </Routes>
     </>
     );
}

export default App;