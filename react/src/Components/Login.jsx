import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
//logic goes here
 const [email,setEmail]=useState("")
  const [password,setPassword]= useState("")
  const navigate=useNavigate()



  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:8000/admin-login',{email,password},{withCredentials: true})
    // .then((res)=>{
    //   console.log(res);
     
    //   toast.success(res.data.message)
    //   setTimeout(()=>{
    //     navigate("/")
    //   },2000)
     
      
     
      
    // })

    .then((response) => {
      console.log(response.data.message);
      navigate("/");
    })
    .catch((error) => {
      if (error.response) {
      toast.error(error.response.data.error);
      } else {
        console.error("Login failed");
      }
    });


    

  }
 

  return (
     <>
        <form onSubmit={handleSubmit}>
   


  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     />
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     />
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
<ToastContainer position="top-center"/>
     </>
     );
}

export default Login;