import "./assets/tailwind.css";
import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Error404 from "./pages/Error404";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import FormCustomer from "./pages/FormCustomer";
import FormOrders from "./pages/FormOrders";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashbboard"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Home = React.lazy(() => import("./pages/Guest/Home"));
const About = React.lazy(() => import("./components/Guest/About"));
const Testimoni = React.lazy(() => import("./components/Guest/Testimoni"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/Error400" element={<Error400 />} />
        <Route path="/Error401" element={<Error401 />} />
        <Route path="/Error403" element={<Error403 />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/formcust" element={<FormCustomer />} />
          <Route path="/formOrders" element={<FormOrders />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/testimoni" element={<Testimoni />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
