import { useEffect, useState } from "react";
import { Navigate} from "react-router-dom";
import axios from 'axios'

function PrivateRoute({children}) {
//logic goes here
 const [isAuthenticated,setIsAuthenticated] =useState(null)
// const [loading,setLoading]=useState(true)


 useEffect(()=>{
  const checkAuth = ()=>{
    axios.get("http://localhost:8000/checkAuth",{withCredentials: true})
     .then((response)=>{
        console.log(response.data.authenticated);
        setIsAuthenticated(response.data.authenticated)
         })

     .catch((error)=>{
      console.log("Authentication check failed",error);
      // setIsAuthenticated(false)
      })
      // .finally(()=>{
      //   setLoading(false)
      // })
  }
  checkAuth()
},[])
if(isAuthenticated== null){
  return <div>Loading...</div>//some loading spinner
}
  return  isAuthenticated ? children : <Navigate to="/admin-login" />
    
}
export default PrivateRoute;