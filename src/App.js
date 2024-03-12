import Login from "./pages/login/Login";
import React from "react";
import Register from "./pages/register/Register";
import {createBrowserRouter,RouterProvider, Outlet, Navigate} from 'react-router-dom'
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Leftbar from "./components/leftbar/Leftbar"
import Rightbar from "./components/rightbar/Rightbar"
import Navbar from "./components/navbar/Navbar"
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Footer from "./components/bottombar/Footer";

function App() {

  const {darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)
        
  const Layout = ({children}) => {
    return(
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      <Navbar/>
      <div style={{display:'flex'}}>
        <Leftbar/>
        <div style={{flex:6}}>
       {children}     
        </div>
        <Rightbar/>
      </div>
      <Footer/>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser)
    {
     return <Navigate to='/login'/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:
      <ProtectedRoute>
      <Layout children={<Home/>}/>
        </ProtectedRoute>
      
    },
    {
      path:'/profile/:id',
      element:
      <ProtectedRoute>
          <Layout children={<Profile/>}/>
        </ProtectedRoute>
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  // children:[
      //   {
      //     path:"/",
      //     element: <Home/>,
      //   },
      //   {
      //     path:'/profile/:id',
      //     element: <Profile/>
      //   }
      // ]
  return (
    <div>
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
