import { useNavigate } from "react-router-dom";
import {Outlet,NavLink} from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from "react";




const DashBoard=()=> {
//logic goes herec
const[email,setEmail]=useState("")
const [loading,setLoading]=useState(true)
const [error,setError]=useState(null)

const navigate = useNavigate()

useEffect(()=>{
  const fechUser = ()=>{
    axios.
        get("http://localhost:8000/",{withCredentials:true})
        .then((response)=>{
          setEmail(response.data.email);
          setLoading(false)
        })
  }
  fechUser();
},[])


function handleSignOut() {
  axios
    .get("http://localhost:8000/logout", { withCredentials: true })
    .then((res) => {
      console.log(res);
      navigate("/admin-login");
    })
    .catch((err) => {
      console.log(err);
    });
}


if(loading) return <div>Loading...</div>
if(error) return <div>{error}</div>
return (
     <>
     <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <h3>Logo {"   "}</h3>
            </NavLink>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="products" className="nav-link px-2">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="addproducts" className="nav-link px-2">
                  Add Products
                </NavLink>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Reports
                </a>
              </li>
              <li>
                  <button className="" onClick={handleSignOut}>
                    Sign out
                  </button>
                </li>
            </ul>
           
          </div>
        </div>
      </header>

      <div>
        <h5>Welcome to the Dashboard</h5>
        <p>User Email: {email}</p>
      </div>
      <Outlet />
    </>
      
     );
}

export default DashBoard;