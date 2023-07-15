import Home from "./pages/home/home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/global.scss"

function App() {
  const Layout = () =>{
    return <div className="main">
  <Navbar/>
  <div className="container">
    <div className="menuContainer"><Menu/></div>
    <div className="contentContainer">
      <Outlet />
    </div>
  </div>
  <Footer/>
    </div>
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      
      children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "users",
        element: <Users/>
      },
    ]
      
    }])
  
  return (
   <RouterProvider router={router} />
  )
}

export default App
