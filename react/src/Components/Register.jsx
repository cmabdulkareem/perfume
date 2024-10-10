import { useState } from "react";
import axios from 'axios'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Register() {
//logic goes here
  
const [username,setUsername]=useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

async function handleSubmit(e)
{
  e.preventDefault()
  try{
  const res=await axios.post('http://localhost:8000/register',{username,email,password})
    
      console.log(res);
      toast(res.data.message)
      setTimeout(()=>{
        navigate("/admin-login")
      },2000)
    }
    catch(error){
  toast(error.response.data.error)
  
      
    }
}
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">User name</label>
    <input type="text" className="form-control" id="password" aria-describedby="emailHelp"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    />
    </div>


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
  
  <button type="submit" className="btn btn-primary">SignUp</button>
</form>
<ToastContainer/>
    </>
    
     )
}

export default Register;
















// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
  


// function Register() {
// //logic goes here

// const [username,setUSername]=useState("")
// const [email,setEmail] =useState("")
// const [password,setPassword] = useState("")
// const [notification,setNotification] = useState("")

// const navigate =useNavigate()

// function handleSubmit(e){
//   e.preventDefault()
//   axios.post("http://localhost:3000/register",{username,email,password})
//       .then((data)=>{
//         setNotification(data.data.message)
//         toast(data.data.message)
      
        
//         setTimeout(()=>{
          
//           navigate("/login")
//         },2000)
//       })
//       .catch((error)=>{
//         console.log(error);
        
//       })
// }


//   return (
//      <>
//        <h1>Registration</h1>
   
//        <form onSubmit={handleSubmit}>
  
//   <div classNameName="mb-3">
//     <label htmlFor="exampleInputPassword1">User Name</label>
//     <input type="text"  value={username} classNameName="form-control" id="username" placeholder="username" 
//     onChange={(e)=>setUSername(e.target.value)}/>
//   </div>
   
//   <div classNameName="mb-3">
//     <label htmlFor="exampleInputPassword1">Email</label>
//     <input type="email"  value={email} classNameName="form-control" id="email" placeholder="email"
//      onChange={(e)=>setEmail(e.target.value)}/>
//   </div>
//   <div classNameName="mb-3">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" value={password} classNameName="form-control" id="password" placeholder="Password"
//      onChange={(e)=>setPassword(e.target.value)}/>
//   </div>
 
//   <button type="submit" classNameName="btn btn-primary">Submit</button>
//   <p>{notification}</p>
// </form>
// <ToastContainer/>
//        </>
//   )

//        }
      
// export default Register;
       
     