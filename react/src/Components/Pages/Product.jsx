


import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Product() {
//logic goes here
 


const [products,setProducts]=useState([])
const navigate =useNavigate()
useEffect(()=>{
  axios 
    .get("http://localhost:8000/products")
    .then((res)=>{
      setProducts(res.data.message)
    })

    .catch((err)=>{
      console.log(err);
      })
},[])

  return (
     <>
       


<div className="container">
     
     <div className="row row-cols-1 row-cols-md-5 g-4">
       {products.length > 0 ? (
         products.map((item, index) => (
           <div className="col-md-4 mb-4" key={item._id}>
             <div className="card">
               <img
                 src={`http://localhost:8000/images/product-images/${item._id}.jpeg`}
                 alt="Product Image"
                 className="card-img-top"
                 style={{ height: "", objectFit: "cover" }} // Adjust image height and fit
               />
               <div className="card-body text-center">
                 <h5 className="card-title">{item.itemName}</h5>
                 
                 <p className="card-text">
                   <strong>${item.itemPrice.toFixed(2)}</strong>
                 </p>
                 {/* Uncomment these buttons if you want to add edit/delete functionality */}
                 {/* <div className="d-flex justify-content-between">
                   <button className="btn btn-warning">Edit</button>
                   <button className="btn btn-danger">Delete</button>
                 </div> */}
               </div>
             </div>
           </div>
         ))
       ) : (
         <div className="col-12 text-center">
           <h3>No products available</h3>
         </div>
       )}
     </div>
   </div>



 


     </>
     );
}

export default Product;