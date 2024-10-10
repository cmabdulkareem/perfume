import axios from "axios";
import { useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProducts() {
//logic goes here
 
const [itemName,setItemName]=useState("")
const [itemDesc,setItemDesc]=useState("")
const [itemPrice,setItemPrice]=useState("")

const [image, setImage] = useState(null);

const handleSubmit=(e) =>{
  e.preventDefault()

  const formData = new FormData()
  formData.append('itemName',itemName)
  formData.append('itemDesc',itemDesc)
  formData.append('itemPrice',itemPrice)
  if(image)
  {
    formData.append('image',image)

  }

  axios.post("http://localhost:8000/addproducts",formData,{
    headers: {
      'Content-Type' : 'multipart/form-data'
    }
  })
  .then((response)=>{
    console.log(response.data.message);
    setItemName("")
    setItemDesc("")
    setItemPrice("")
    document.getElementById("image").value=""
    // toast.success(response.data.message)
  })

    
  
  .catch((error)=>{
    // toast(err.response.data.error)
    console.error("error adding product", error)
    console.log(formData);
    


  })
  
}
  return (
    <>
    <div className="container">
      <div className="col-6">
        <h2>Add Products</h2>

        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="itemName">Item name</label>
    <input type="text" className="form-control" name="itemName"
    onChange={(e)=>setItemName(e.target.value)}
    value={itemName}
    placeholder="enter item name"/>
  </div>

  <div className="form-group">
    <label htmlFor="itemDescription">Item Description</label>
    <input type="text" className="form-control" name="itemDescription"
    onChange={(e)=>setItemDesc(e.target.value)}
    value={itemDesc}
    placeholder="enter item decription"/>
</div>


<div className="form-group">
    <label htmlFor="price">Item Price</label>
    <input type="number" className="form-control" name="itemPrice"
    onChange={(e)=>setItemPrice(e.target.value)}
    value={itemPrice}
    placeholder="enter item decription"/>
</div>


  <div className="form-group">
    <label htmlFor="image">Image</label>
    <input type="file" className="form-control-file" id="image" 
    onChange={(e)=>setImage(e.target.files[0])}
    name="image" />
  </div>

  <button className = "btn btn-primary">Submit</button>
  </form>
  </div>
    </div>
    
     
   
     </>
     );
}

export default AddProducts;