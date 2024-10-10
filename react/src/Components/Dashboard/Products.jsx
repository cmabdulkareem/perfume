import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
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

const handleDelete =(id)=>{
  if(window.confirm("are you sure to delete the products")){
    axios
    .delete(`http://localhost:8000/deleteproduct/${id}`)
    .then((res)=>{
      setProducts(products.filter(products => products._id !==id))
    })
    .catch((err)=>{})

  }
}
const handleEdit = (id) => {
  navigate(`/editproduct/${id}`); // Navigate to the edit page
};


  return (
     <>
       <div className="container">
        <div className="row">
          <h1 className ="mt-5">Products</h1>
          <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Image</th>
                      <th scope="col">Item</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
              {products.length > 0 ? (
                products.map((item,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>
                      <img
                          src={`http://localhost:8000/images/product-images/${item._id}.jpeg`} 
                          alt="Product Image"
                          style={{width:"50px", height: "50px"}}
                      />
                    </td>

                    <td>{item.itemName}</td>
                    <td>{item.itemDesc}</td>
                    <td>{item.itemPrice}</td>

                    <td>
                    <button 
                        onClick={() => handleEdit(item._id)} 
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={()=> handleDelete(item._id)}
                        className='btn btn-danger ms-2'
                        >
                          Delete
                        </button>
                    </td>
                    </tr>
                ))
              ) : (
                <tr colpan ="6" className ="text-center">
                  <td>
                  No products available
                  </td>
                </tr>
              )}
           </tbody>
          </table>
        </div>
       </div>
     </>
     );
}

export default Products;