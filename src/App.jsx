import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import { NavbarProvider } from "./Components/NavbarContext";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Items from "./Components/Items";
import Signup from "./Components/Signup";
import OTP2 from "./Components/OTP2";
import Password from "./Components/Password";
import Changepassword from "./Components/Changepassword";
import Signin from "./Components/Signin";
import Checkout from "./Components/Checkout";
import Order from "./Components/Order";
import Wishlist from "./Components/Wishlist";
import ScrollToTop from "./Components/ScrollToTop";
import AdminNav from "./Components/DashboardAdmin/AdminNav";
import AdminPanel from "./Components/DashboardAdmin/AdminPanel";
import AddProducts from "./Components/DashboardAdmin/AddProducts";
import Sidebar from "./Components/DashboardAdmin/SideBar";
import Dashboard from "./Components/DashboardAdmin/Dashboard";
import Orders from "./Components/DashboardAdmin/Orders";

function App() {
  const [count, setCount] = useState(0);
  console.log(window.location.href.includes("/products"));
  const [topMargin, setTopMargin] = useState(0);
  const [wishItems, setWishItems] = useState([]);
  // Ref for the top fixed div
  const topDivRef = useRef(null);
  useEffect(() => {
    if (topDivRef.current) {
      setTopMargin(topDivRef.current.offsetHeight);
    }
  }, []);
  const [cartItems, setCartItems] = useState([]);
  function addCart(prolist) {
    setCartItems([...cartItems, prolist]);
  }
  console.log(cartItems);

  function wishList(prolist) {
    setWishItems([...wishItems, prolist]);
  }
  console.log(wishItems);
  const location = useLocation();
  return (
    <NavbarProvider>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/password" &&
        location.pathname !== "/changepassword" &&
        location.pathname !== "/admin" && 
        location.pathname !== "/admin/orders" &&
        location.pathname !== "/admin/addproducts" &&(
          <Nav topDivRef={topDivRef} cartItems={cartItems} />
        )}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/otp2" element={<OTP2 />} />
        <Route path="/password" element={<Password />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route
          path="/cart"
          element={
            <Cart
              topMargin={topMargin}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/products"
          element={<Products addCart={addCart} wishList={wishList} />}
        />
        <Route path="/checkout" element={<Checkout topMargin={topMargin} />} />
        <Route path="/order" element={<Order topMargin={topMargin} />} />
        <Route path="/pops" element={<Product />} />
        <Route path="/app" element={<Landing topMargin={topMargin} />} />
        <Route path="/" element={<Landing topMargin={topMargin} />} />
        <Route path="/detailspage/:id" element={<Items addCart={addCart} />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              topMargin={topMargin}
              wishItems={wishItems}
              setWishItems={setWishItems}
            />
          }
        />
        <Route element = {<AdminPanel/>}>

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/addproducts" element={<AddProducts />} />
        </Route>

        {/* <Route
          path="/admin/*"
          element={
            <div className="flex h-screen bg-gray-200">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <AdminNav />
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="addproducts" element={<AddProducts />} />
                </Routes>
              </div>
            </div>
          }
        /> */}
      </Routes>
      {/* <ScrollToTop/> */}
      {/* <Landing2 />
        <Sliders />
        <Footers /> */}
    </NavbarProvider>
  );
}

export default App;
