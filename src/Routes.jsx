import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UpdateProfile = React.lazy(() => import("pages/UpdateProfile"));
const YourAddress = React.lazy(() => import("pages/YourAddress"));
const Registration = React.lazy(() => import("pages/Registration"));
const Login = React.lazy(() => import("pages/Login"));
const CheCkout = React.lazy(() => import("pages/CheCkout"));
const MyProfile = React.lazy(() => import("pages/MyProfile"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const YourOrders = React.lazy(() => import("pages/YourOrders"));
const OurMenu = React.lazy(() => import("pages/OurMenu"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourmenu" element={<OurMenu />} />
          <Route path="/yourorders" element={<YourOrders />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/checkout" element={<CheCkout />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/youraddress" element={<YourAddress />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
